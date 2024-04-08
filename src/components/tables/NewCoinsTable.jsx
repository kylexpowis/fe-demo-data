import React, { useState, useEffect } from 'react';
import { getNewCoins } from '../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Link, Card, CardHeader, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import moment from 'moment/moment';
import NoResults from '../custom/NoResults';

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
            flexGrow: 0,
            renderCell: (params) => (
                <Link to={`/coins/${params.row.coin_id}`} target="_blank" rel="noopener noreferrer"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            color: 'primary.main',
                        },
                    }}>
                    {params.value}
                </Link>
            )
        },
        {
            field: 'coin_name',
            headerName: 'Coin Name',
            flex: 1,
            renderCell: (params) => (
                <span style={{ opacity: 0.7, fontWeight: '600' }}>{params.value}</span>
            ),
        },
        {
            field: 'is_active',
            headerName: 'Status',
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
            field: 'date_added',
            headerName: 'Date Added',
            type: 'timestamp',
            flex: 1,
            renderCell: (params) => moment(params.value).format('lll') ?? '—'
        }
    ];


    return (
        <Card sx={{
            ':hover': {
                outline: '1px solid #cccccc',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)'
            },
        }}>
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
                        <MenuItem value="3 day">3 Days</MenuItem>
                        <MenuItem value="7 days">7 Days</MenuItem>
                        <MenuItem value="14 days">14 Days</MenuItem>
                        <MenuItem value="28 days">28 Days</MenuItem>
                    </Select>
                </FormControl>
            } sx={{ '& .MuiCardHeader-title': { fontWeight: '600' } }} />
            <Box sx={{ height: 300, width: '100%' }}>
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
                    <NoResults />
                )}
            </Box>
        </Card>
    );

}

export default NewCoinsTable;
