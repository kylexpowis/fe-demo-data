import React, { useState, useEffect } from "react";
import { getNewCoins } from "../../../config/api";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch
} from "@mui/material";
import NoResults from "../custom/NoResults";
import { NewCoinsColumns } from "./columns/NewCoinsColumn";
import CircularLoad from "../custom/CircularLoad";

function NewCoinsTable() {
  const [newCoins, setNewCoins] = useState([]);
  const [density, setDensity] = useState('compact');
  const [timeFrame, setTimeFrame] = useState("1 day");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getNewCoins(timeFrame)
      .then((coins) => {
        setNewCoins(coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeFrame]);

  const handleDensityChange = (event) => {
    setDensity(event.target.checked ? 'standard' : 'compact');
  };

  return (
    <Card
      sx={{
        ":hover": {
          outline: "1px solid #cccccc",
          boxShadow:
            "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardHeader
        title="New Coins"
        action={
          <>
            <FormControlLabel
              control={<Switch checked={density === 'standard'} onChange={handleDensityChange} />}
              label="Relaxed View"
              labelPlacement="start"
              sx={{ pr: '10px' }}
            />
            <FormControl size="small">
              <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
              <Select
                labelId="timeframe-select-label"
                id="timeframe-select"
                value={timeFrame}
                label="Time Frame"
                onChange={(e) => setTimeFrame(e.target.value)}
                sx={{ minWidth: 120, position: 'relative' }}
              >
                <MenuItem value="1 hour">1 hour</MenuItem>
                <MenuItem value="8 hours">8 hours</MenuItem>
                <MenuItem value="1 day">1 Day</MenuItem>
                <MenuItem value="3 days">3 Days</MenuItem>
                <MenuItem value="7 days">7 Days</MenuItem>
                <MenuItem value="14 days">14 Days</MenuItem>
                <MenuItem value="28 days">28 Days</MenuItem>
              </Select>
            </FormControl>
          </>
        }
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 300, width: "100%" }}>
        {isLoading ? (
          <CircularLoad />
        ) : newCoins.length > 0 ? (
          <DataGrid
            rows={newCoins}
            columns={NewCoinsColumns}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            loading={isLoading}
            getRowId={(row) => row.coin_id || Math.random()}
            className="MuiDataGrid-virtualScroller"
            density={density}
          />
        ) : (
          <NoResults />
        )}
      </Box>
    </Card>
  );
}

export default NewCoinsTable;
