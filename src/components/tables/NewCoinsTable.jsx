import React, { useState, useEffect } from 'react';
import { getNewCoins } from '../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import { format } from 'date-fns';

function NewCoinsTable() {
    const [newCoins, setNewCoins] = useState([]);
    const [timeFrame, setTimeFrame] = useState('1 day');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getNewCoins(timeFrame)
            .then((coins) => {
                setNewCoins(coins || []);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [timeFrame]);

    const columns = [
        {
            field: 'logo_url',
            headerName: '',
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
            renderCell: (params) => params.value ?? '—'
        },
        {
            field: 'coin_name',
            headerName: 'Coin Name',
            renderCell: (params) => params.value ?? '—'
        },
        {
            field: 'date_added',
            headerName: 'Date Added',
            type: 'timestamp',
            renderCell: (params) => params.value ?? '—'
        },
        {
            field: 'is_active',
            headerName: 'Active',
            renderCell: (params) => {
                if (params.value === null || params.value === undefined) {
                    return <span>—</span>;
                }
                return (
                    <span style={{ color: params.value ? 'green' : 'red' }}>
                        {params.value ? 'Active' : 'Inactive'}
                    </span>
                );
            },
        },
        {
            field: 'currency_type',
            headerName: 'Currency Type',
            renderCell: (params) => params.value ?? '—'
        }
    ];


    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardHeader title='New Coins' action={
                <FormControl size="small">
                    <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
                    <Select
                        labelId="timeframe-select-label"
                        id="timeframe-select"
                        value={timeFrame}
                        label="Time Frame"
                        onChange={(e) => setTimeFrame(e.target.value)}
                        sx={{ minWidth: 120 }}
                    >
                        <MenuItem value="1 hour">1 hour</MenuItem>
                        <MenuItem value="8 hours">8 hours</MenuItem>
                        <MenuItem value="1 day">1 Day</MenuItem>
                        <MenuItem value="7 days">7 Days</MenuItem>
                        <MenuItem value="14 days">14 Days</MenuItem>
                        <MenuItem value="28 days">28 Days</MenuItem>
                    </Select>
                </FormControl>
            } />
            <Box sx={{ height: 400, width: '100%' }}>
                {isLoading ? (
                    <LoadingScreen />
                ) : newCoins.length > 0 ? (
                    <DataGrid
                        rows={newCoins}
                        columns={columns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        loading={isLoading}
                        getRowId={(row) => row.coin_id || Math.random()}
                        className='MuiDataGrid-virtualScroller'
                    />
                ) : (
                    <Typography>No new coins available for the selected timeframe.</Typography>
                )}
            </Box>
        </Card>
    );

}

export default NewCoinsTable;
