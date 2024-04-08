import React, { useEffect, useState } from 'react'
import { getNewPairs } from '../../../config/api'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardHeader, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import moment from 'moment/moment';
import NoResults from '../custom/NoResults';

function NewPairsTable() {
    const [newPairs, setNewPairs] = useState([]);
    const [timeFrame, setTimeFrame] = useState('1 day');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewPairs(timeFrame)
            .then((pairs) => {
                console.log(pairs);
                setNewPairs(pairs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch new pairs.", err);
                setLoading(false);
            });
    }, [timeFrame]);

    const columns = [
        {
            field: 'pair_name',
            headerName: 'Pair Name',
            flex: 1,
            renderCell: (params) => params.value ?? '—'
        },
        {
            field: 'is_active',
            headerName: 'Status',
            flex: 1,
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
            renderCell: (params) => moment(params.value).format('lll') ?? '—',
        },
    ];

    return (
        <Card sx={{
            ':hover': {
                outline: '1px solid #cccccc',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)'
            },
        }}>
            <CardHeader title='New Pairs' action={
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
                        <MenuItem value="3 day">3 Day</MenuItem>
                        <MenuItem value="7 days">7 Days</MenuItem>
                        <MenuItem value="14 days">14 Days</MenuItem>
                        <MenuItem value="28 days">28 Days</MenuItem>
                    </Select>
                </FormControl>
            } sx={{'& .MuiCardHeader-title': { fontWeight: '600' }}}/>
            <Box sx={{ height: 300, width: '100%' }}>
                {loading ? (
                    <LoadingScreen />
                ) : newPairs.length > 0 ? (
                    <DataGrid
                        rows={newPairs}
                        columns={columns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        loading={loading}
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


export default NewPairsTable;