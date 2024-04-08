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
import moment from "moment/moment";
import CircularLoad from "../custom/CircularLoad";
import { Link } from "react-router-dom";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVolumeChange()
      .then((coins) => {
        setCoins(coins);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch 24hr volume data.", err);
      });
  }, []);

  const columns = [
    {
      field: "logo_url",
      headerName: "",
      flexGrow: 0,
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
      flex: 1,
      type: "number",
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
    },
    {
      field: "timestamp",
      headerName: "Last Updated",
      flex: 1,
      renderCell: (params) => moment(params.value).format("LTS") ?? "—",
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
        title="Volume/MarketCap"
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
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
