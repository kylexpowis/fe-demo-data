import React, { useEffect, useState } from 'react';
import { getNewPairs } from '../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Card, CardHeader, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import LoadingScreen from '../custom/LoadingScreen';
import NoResults from '../custom/NoResults';
import { NewPairsColumns } from './columns/NewPairsColumns';

const timeFrameOptions = [
    "1 hour", "8 hours", "1 day", "3 days", "7 days", "14 days", "28 days"
];

function NewPairsTable() {
    const [newPairs, setNewPairs] = useState([]);
    const [timeFrame, setTimeFrame] = useState('1 day');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        getNewPairs(timeFrame)
            .then(pairs => {
                setNewPairs(pairs);
            })
            .catch(err => {
                console.error("Failed to fetch new pairs.", err);
                setError('Failed to fetch new pairs.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [timeFrame]);

    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };

    return (
        <Card>
            <CardHeader
                title="New Pairs"
                action={
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                        <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
                        <Select
                            labelId="timeframe-select-label"
                            id="timeframe-select"
                            value={timeFrame}
                            label="Time Frame"
                            onChange={handleTimeFrameChange}
                        >
                            {timeFrameOptions.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                }
                sx={{ '& .MuiCardHeader-title': { fontWeight: '600' } }}
            />
            <Box sx={{ height: 300, width: '100%' }}>
                {loading ? <LoadingScreen /> : error ? <Typography>{error}</Typography> : newPairs.length > 0 ? (
                    <DataGrid
                        rows={newPairs}
                        columns={NewPairsColumns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        getRowId={(row) => row.pair_id || Math.random()}
                    />
                ) : <NoResults />}
            </Box>
        </Card>
    );
}

export default NewPairsTable;
