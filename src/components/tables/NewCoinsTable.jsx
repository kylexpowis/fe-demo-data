import React, { useState, useEffect } from 'react';
import { getNewCoins } from '../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function NewCoinsTable() {
    const [newCoins, setNewCoins] = useState([]);
    const [timeFrame, setTimeFrame] = useState('1 day');
    const [isLoading, setIsLoading] = useState(true);
    const [pageSize, setPageSize] = useState(5);

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
            headerName: 'Logo',
            width: 30,
            renderCell: (params) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <img src={params.value} alt={params.row.coin_name} style={{ width: 30, height: 30 }} />
                </Box>
            ),
        },
        { field: 'symbol', headerName: 'Symbol', width: 80 },
        { field: 'coin_name', headerName: 'Coin Name', width: 130 },
        {
            field: 'date_added',
            headerName: 'Date Added',
            type: 'date',
            width: 160,
        },
        { field: 'is_active', headerName: 'Active', width: 70 },
        { field: 'currency_type', headerName: 'Currency Type', width: 70 }
    ];

    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardHeader title='New Assets' action={
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
                        <MenuItem value="1 day">1 Day</MenuItem>
                        <MenuItem value="7 days">7 Days</MenuItem>
                        <MenuItem value="30 days">14 Days</MenuItem>
                        <MenuItem value="30 days">28 Days</MenuItem>
                    </Select>
                </FormControl>
            } />
            <Box sx={{ height: 600, width: '100%' }}>
                {isLoading ? (
                    <Typography>Loading...</Typography>
                ) : newCoins.length > 0 ? (
                    <DataGrid
                        rows={newCoins}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
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
