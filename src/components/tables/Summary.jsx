import LoadingScreen from "../custom/LoadingScreen";
import { getSummary } from "../../../config/api";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Link as MuiLink,
  FormControlLabel,
  Switch
} from "@mui/material";

export const Summary = () => {
  const [density, setDensity] = useState('standard')
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getSummary()
      .then((data) => {
        setCoins(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleDensityChange = (event) => {
    setDensity(event.target.checked ? 'compact' : 'standard');
  };

  const columns = [
    {
      field: "logo_url",
      headerName: "",
      type: "string",
      
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {params.value ? (
            <img
              src={params.value}
              alt={params.row.coin_name}
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "none",
              }}
            />
          ) : (
            <span> </span>
          )}
        </Box>
      ),
    },
    {
      field: "symbol",
      headerName: "Symbol",
      type: "string",
      flexGrow: 0,
      renderCell: (params) => (
        <MuiLink
          component={Link}
          to={`/coins/${params.row.coin_id}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: "bold",
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {params.value}
        </MuiLink>
      ),
    },
    {
      field: "coin_name",
      headerName: "Coin Name",
      type: "string",
      flex: 1,
      renderCell: (params) => (
        <span style={{ opacity: 0.7, fontWeight: "600" }}>{params.value}</span>
      ),
    },
    {
      field: "pairs_added",
      headerName: "Pairs Added (24h)",
      type: "int",
      flex: 1,
      renderCell: (params) => params.value ?? "—",
    },
    {
      field: "pairs_removed",
      headerName: "Pairs removed (24h)",
      type: "int",
      flex: 1,
      renderCell: (params) => params.value ?? "—",
    },
    {
      field: "pair_count",
      headerName: "Total Pairs",
      type: "int",
      flex: 1,
      renderCell: (params) => params.value ?? "—",
    },
  ];

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
        title="Market Overview"
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
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
        {isLoading ? (
          <LoadingScreen />
        ) : coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            loading={isLoading}
            getRowId={(row) => row.coin_id || Math.random()}
            density={density}
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Card>
  );
};
