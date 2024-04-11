import React, { useEffect, useState } from "react";
import { getSummary } from "../../../config/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardHeader, Typography, FormControlLabel, Switch } from "@mui/material";
import { SummaryColumns } from "./columns/SummaryColumns";
import CircularLoad from "../custom/CircularLoad";

export const Summary = () => {
  const [density, setDensity] = useState('standard');
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true); 
    getSummary()
      .then(data => {
        setCoins(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError('Failed to fetch summary data.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDensityChange = () => {
    setDensity((prevDensity) => (prevDensity === 'standard' ? 'compact' : 'standard'));
  };

  return (
    <Card sx={{ ":hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" } }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Market Overview</Typography>}
        action={
          <FormControlLabel
            control={<Switch checked={density === 'compact'} onChange={handleDensityChange} />}
            label="Condensed View"
            labelPlacement="start"
            sx={{ pr: '10px' }}
          />
        }
      />
      <Box sx={{ height: 800, width: "100%" }}>
        {isLoading ? <CircularLoad /> : error ? <Typography>{error}</Typography> : coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={SummaryColumns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            getRowId={(row) => row.coin_id}
            density={density}
          />
        ) : <Typography>No data available</Typography>}
      </Box>
    </Card>
  );
};
