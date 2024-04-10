import React, { useEffect, useState } from "react";
import { getVolumeChange } from "../../../config/api";
import LoadingScreen from "../custom/LoadingScreen";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Card, CardHeader, FormControlLabel, Switch } from "@mui/material";
import { VolumeColumns } from "./columns/VolumeColumns";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [density, setDensity] = useState('standard');

  useEffect(() => {
    getVolumeChange()
      .then(fetchedCoins => {
        const uniqueCoins = deduplicateCoins(fetchedCoins);
        setCoins(uniqueCoins);
      })
      .catch(error => {
        console.error("Failed to fetch 24hr volume data.", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deduplicateCoins = (coins) => Array.from(new Map(coins.map(coin => [coin.coin_id, coin])).values());

  const handleDensityChange = (event) => setDensity(event.target.checked ? 'compact' : 'standard');

  return loading ? (
    <LoadingScreen />
  ) : (
    <Card sx={{ "&:hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" } }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Volume/Marketcap</Typography>}
        action={
          <FormControlLabel
            control={<Switch checked={density === 'compact'} onChange={handleDensityChange} />}
            label="Condensed View"
            sx={{ mr: 2 }}
          />
        }
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 1200, width: "100%" }}>
        {coins.length > 0 ? (
          <DataGrid
            rows={coins}
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
