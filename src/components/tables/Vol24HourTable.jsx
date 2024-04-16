import React, { useEffect, useState } from "react";
import { getVolumeChange } from "../../../config/api";
import LoadingScreen from "../custom/LoadingScreen";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Card, CardHeader, FormControlLabel, Switch } from "@mui/material";
import { VolumeColumns } from "./columns/VolumeColumns";
import { supabase } from "../../lib/supabaseClient";
import ServiceStatusIndicator from "../custom/ServiceIndicator";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [density, setDensity] = useState('compact');
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVolumeChange()
      .then(fetchedCoins => {
        const uniqueCoins = deduplicateCoins(fetchedCoins);
        setCoins(uniqueCoins);
        setDisplayedCoins(uniqueCoins); // Directly update displayed coins
        setUpdateAvailable(true);  // Flag that a new update is available
      })
      .catch(error => {
        console.error("Failed to fetch 24hr volume data.", error);
      })
      .finally(() => {
        setLoading(false);
      });

    const channel = setupRealtimeUpdates();
    return () => channel?.unsubscribe();
  }, []);

  useEffect(() => {
    if (updateAvailable) {
      setDisplayedCoins(coins);
      setUpdateAvailable(false);
    }
  }, [updateAvailable, coins]);

  const setupRealtimeUpdates = () => {
    return supabase
      .channel('supabase_realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'vol24marketcap' }, (payload) => {
        updateCoins(payload);
      })
      .subscribe();
  };

  const updateCoins = (payload) => {
    setCoins(prevCoins => {
      const updatedCoins = prevCoins.map(coin => {
        if (coin.coin_id === payload.new.coin_id) {
          return { ...coin, volume_over_marketcap: payload.new.volume_over_marketcap };
        }
        return coin;
      });
      setDisplayedCoins(updatedCoins); // Update displayed coins directly here
      setUpdateAvailable(true);
      return updatedCoins;
    });
  };

  const deduplicateCoins = (coins) => Array.from(new Map(coins.map(coin => [coin.coin_id, coin])).values());

  const handleDensityChange = (event) => {
    setDensity(event.target.checked ? 'standard' : 'compact');
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <Card sx={{ "&:hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" } }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Volume/Marketcap</Typography>}
        action={
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Switch checked={density === 'standard'} onChange={handleDensityChange} />}
              label="Relaxed View"
              sx={{ mr: 2 }}
            />
            <ServiceStatusIndicator loading={loading}/>
          </Box>
        }
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 1200, width: "100%" }}>
        {displayedCoins.length > 0 ? (
          <DataGrid
            rows={displayedCoins}
            columns={VolumeColumns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            getRowId={(row) => row.coin_id}
            density={density}
          />
        ) : (
          <Typography sx={{ p: 2 }}>No data available</Typography>
        )}
      </Box>
    </Card>
  );
}

export default VolumeRankingTable;