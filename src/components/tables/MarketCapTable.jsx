import React, { useEffect, useState } from "react";
import { getMarketCapStats } from "../../../config/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Card, CardHeader, FormControlLabel, Switch } from "@mui/material";
import CircularLoad from "../custom/CircularLoad";
import MarketcapColumns from "./columns/MarketcapColumns";

const deduplicateCoins = (coins) =>
  Array.from(new Map(coins.map((coin) => [coin.coin_id, coin])).values());

const MarketCapTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [density, setDensity] = useState('standard');

  useEffect(() => {
    getMarketCapStats()
      .then((coins) => {
        setCoins(deduplicateCoins(coins));
      })
      .catch((err) => {
        console.error("Failed to fetch marketcap data.", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDensityChange = (event) => {
    setDensity(event.target.checked ? 'compact' : 'standard');
  };

  return (
    <Card sx={{ ":hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" }}}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Marketcap (24hr)</Typography>}
        action={
          <FormControlLabel
            control={<Switch checked={density === 'compact'} onChange={handleDensityChange} />}
            label="Condensed View"
            sx={{ pr: '10px' }}
          />
        }
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 1200, width: "100%" }}>
        {loading ? <CircularLoad /> : coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={MarketcapColumns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            loading={loading}
            getRowId={(row) => row.coin_id}
            density={density}
          />
        ) : <Typography sx={{ p: 2 }}>No data available</Typography>}
      </Box>
    </Card>
  );
};

export default MarketCapTable;
