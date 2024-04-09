import React, { useEffect, useState } from "react";
import { getVolumeChange } from "../../../config/api";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Link as MuiLink,
} from "@mui/material";
import CircularLoad from "../custom/CircularLoad";
import { Link } from "react-router-dom";
import LoadingScreen from "../custom/LoadingScreen";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVolumeChange()
      .then((coins) => {
        const deduplicatedCoins = deduplicateCoins(coins);
        setCoins(deduplicatedCoins);
      })
      .catch((err) => {
        console.error("Failed to fetch 24hr volume data.", err);
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  const deduplicateCoins = (fetchedCoins) => {
    const uniqueCoins = new Map();
    fetchedCoins.forEach((coin) => {
      uniqueCoins.set(coin.coin_id, coin);
    });
    return Array.from(uniqueCoins.values());
  };

  const columns = [
    {
      field: "logo_url",
      headerName: "",
      width: 70,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
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
            <span>—</span>
          )}
        </Box>
      ),
    },
    {
      field: "symbol",
      headerName: "Symbol",
      flexGrow: 0,
      type: "string",
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
      flex: 1,
      renderCell: (params) => (
        <span style={{ opacity: 0.7, fontWeight: "500" }}>{params.value}</span>
      ),
    },
    {
      field: "volume_over_marketcap",
      headerName: "Volume/Market Cap",
      type: "number",
      flex: 1,
      renderCell: (params) => {
        if (
          params.value === null ||
          params.value === undefined ||
          isNaN(params.value)
        )
          return "—";
        const numericValue = parseFloat(params.value);
        const formattedValue = `${numericValue.toFixed(2)}%`;
        const color =
          numericValue > 0 ? "green" : numericValue < 0 ? "red" : "inherit";
        return <span style={{ color }}>{formattedValue}</span>;
      },
    }
  ];

  if (loading) {
    return (
      <>
        <LoadingScreen />
      </>
    )
  }

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
        title="Volume/MarketCap"
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      >
      </CardHeader>
      <Box sx={{ height: 1200, width: "100%" }}>
        {loading ? (
          <CircularLoad />
        ) : coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            loading={loading}
            getRowId={(row) => row.coin_id || Math.random()}
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Card>
  );
}

export default VolumeRankingTable;
