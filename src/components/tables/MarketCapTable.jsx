import React, { useEffect, useState } from "react";
import { getMarketCapStats } from "../../../config/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Card, CardHeader, FormControlLabel, Switch } from "@mui/material";
import MarketcapColumns from "./columns/MarketcapColumns";
import { supabase } from "../../lib/supabaseClient";
import LoadingScreen from "../custom/LoadingScreen";
import ServiceStatusIndicator from "../custom/ServiceIndicator";

const MarketCapTable = () => {
  const [coins, setCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [density, setDensity] = useState('compact');
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    fetchAndHandleData();
    const channel = setupRealtimeUpdates();
    return () => channel?.unsubscribe();
  }, []);

  useEffect(() => {
    if (updateAvailable) {
      setDisplayedCoins(coins);
      setUpdateAvailable(false);
    }
  }, [updateAvailable, coins]);

  const fetchAndHandleData = () => {
    setLoading(true);
    getMarketCapStats()
      .then(fetchedCoins => {
        const uniqueCoins = deduplicateCoins(fetchedCoins);
        setCoins(uniqueCoins);
        setUpdateAvailable(true);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch 24hr volume data.", error);
        setLoading(false);
      });
  }

  const setupRealtimeUpdates = () => {
    return supabase
      .channel('supabase_realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tradeinfo' }, handleRealtimeUpdate)
      .subscribe();
  };

  const handleRealtimeUpdate = (payload) => {
    setCoins(prevCoins => {
      const updatedCoins = prevCoins.map(updateCoinData(payload));
      setUpdateAvailable(true);
      return updatedCoins;
    });
  };

  const updateCoinData = payload => coin => {
    if (coin.coin_id !== payload.new.coin_id) return coin;
    return {
      ...coin,
      current_marketcap: payload.new.current_marketcap,
    };
  };

  const deduplicateCoins = coins => Array.from(new Map(coins.map(coin => [coin.coin_id, coin])).values());

  const handleDensityChange = event => setDensity(event.target.checked ? 'standard' : 'compact');

  const renderDataGrid = () => (
    <DataGrid
      rows={displayedCoins}
      columns={MarketcapColumns}
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      getRowId={row => row.coin_id}
      density={density}
    />
  );

  return loading ? (
    <LoadingScreen />
  ) : (
    <Card sx={{ "&:hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" } }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Marketcap</Typography>}
        action={
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Switch checked={density === 'standard'} onChange={handleDensityChange} />}
              label="Relaxed View"
              sx={{ mr: 2 }}
            />
            <ServiceStatusIndicator loading={loading} />
          </Box>
        }
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 1200, width: "100%" }}>{displayedCoins.length > 0 ? renderDataGrid() : <Typography sx={{ p: 2 }}>No data available. Please try again later</Typography>}</Box>
    </Card>
  );
};

export default MarketCapTable;
