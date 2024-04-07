import React, { useEffect, useState } from "react";
import { getVolumeChange } from "../../../config/api";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import moment from 'moment/moment';
import { Link } from "react-router-dom";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getVolumeChange()
      .then((coins) => {
        console.log(coins);
        setCoins(coins);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch 24hr volume data.", err);
      });
  }, []);

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
    { field: 'symbol', headerName: 'Symbol', width: 130 },
    { field: 'coin_name', headerName: 'Coin Name', flex: 1 },
    {
      field: 'volume_over_marketcap',
      headerName: 'Volume/Market Cap',
      width: 180,
      type: 'number',
      renderCell: (params) => {
        if (params.value === null || params.value === undefined || isNaN(params.value)) return '—';
        const numericValue = parseFloat(params.value);
        const formattedValue = `${numericValue.toFixed(2)}%`;
        const color = numericValue > 0 ? 'green' : numericValue < 0 ? 'red' : 'inherit';
        return <span style={{ color }}>{formattedValue}</span>;
      },
    },
    {
      field: 'timestamp',
      headerName: 'Latest Update',
      width: 180,
      renderCell: (params) => moment(params.value).format('LTS') ?? '—',
    },
  ];


  return (
    <Card>
      <CardHeader title='Volume/MarketCap'/>
      <Box sx={{ height: 800, width: '100%' }}>
        {loading ? (
          <LoadingScreen />
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
