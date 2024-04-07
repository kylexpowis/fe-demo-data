import { getSummary } from "../../../config/api";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import { Link } from "react-router-dom";

export const Summary = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const columns = [
    {
      field: 'logo_url',
      headerName: '',
      type: 'string',
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
            <span> </span>
          )}
        </Box>
      ),
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      type: 'string',
      
      renderCell: (params) => params.value ?? '—'
    },
    {
      field: 'coin_name',
      headerName: 'Coin Name',
      type: 'string',
      flex: 1,
      renderCell: (params) => params.value ?? '—'
    },
    {
      field: 'pairs_added',
      headerName: 'Pairs Added (24h)',
      type: 'int',
      flex: 1,
      renderCell: (params) => params.value ?? '—'
    },
    {
      field: 'pairs_removed',
      headerName: 'Pairs removed (24h)',
      type: 'int',
      flex: 1,
      renderCell: (params) => params.value ?? '—'
    },
    {
      field: 'pair_count',
      headerName: 'Total Pairs',
      type: 'int',
      flex: 1,
      renderCell: (params) => params.value ?? '—'
    }
  ]

  return (
    <Card>
      <CardHeader title='Market Overview'/>
      <Box sx={{ height: 800, width: '100%' }}>
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
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Card>
  );

};
