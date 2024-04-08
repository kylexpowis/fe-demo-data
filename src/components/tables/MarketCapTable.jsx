import React, { useEffect, useState } from "react";
import { getMarketCapStats } from "../../../config/api";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader } from '@mui/material';
import moment from 'moment/moment';
import { Link } from "react-router-dom";
import CircularLoad from "../custom/CircularLoad";

function MarketCapTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getMarketCapStats()
      .then((coins) => {
        const deduplicatedCoins = deduplicateCoins(coins);
        setCoins(deduplicatedCoins);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch marketcap data.", err);
      });
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
      field: 'logo_url',
      headerName: '',
      width: 70,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {params.value ? (
            <img
              src={params.value}
              alt={params.row.coin_name}
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                border: 'none',
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
      width: 130
    },
    {
      field: "coin_name", headerName:
        "Coin Name", flex: 1
    },
    {
      field: "marketcap_percentage_change",
      headerName: "Market Cap Change (%)",
      type: "number",
      flex: 1,
      renderCell: (params) => {
        if (params.value === null || params.value === undefined || isNaN(params.value)) return '—';
        const numericValue = parseFloat(params.value);
        const formattedValue = `${numericValue.toFixed(2)}%`;
        const color = numericValue > 0 ? 'green' : numericValue < 0 ? 'red' : 'inherit';
        return <span style={{ color }}>{formattedValue}</span>;
      },
    },
    {
      field: "latest_timestamp",
      headerName: "Last Updated",
      flex: 1,
      renderCell: (params) => moment(params.value).format('LTS') ?? '—',
    },
  ];

  return (
    <Card sx={{
      ':hover': {
        outline: '1px solid #cccccc',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)'
      },
    }}>
      <CardHeader title='Marketcap  (24hr)' sx={{'& .MuiCardHeader-title': { fontWeight: '600' }}}/>
      <Box sx={{ height: 1200, width: '100%' }}>
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

export default MarketCapTable;
