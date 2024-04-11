import React, { useEffect, useState } from 'react';
import { getNewPairs } from '../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Card, CardHeader, FormControl, InputLabel, Select, MenuItem, Typography, CircularProgress, FormControlLabel, Switch } from '@mui/material';
import NoResults from '../custom/NoResults';
import { NewPairsColumns } from './columns/NewPairsColumns';
import CircularLoad from '../custom/CircularLoad';

function NewPairsTable() {
    const [newPairs, setNewPairs] = useState([]);
    const [density, setDensity] = useState('standard');
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

    const handleDensityChange = () => {
        setDensity((prevDensity) => (prevDensity === 'standard' ? 'compact' : 'standard'));
    };

    return (
        <Card sx={{
            ":hover": {
                outline: "1px solid #cccccc",
                boxShadow:
                    "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
            },
        }}>
            <CardHeader
                title="New Pairs"
                action={
                    <>
                        <FormControlLabel
                            control={<Switch checked={density === 'compact'} onChange={handleDensityChange} />}
                            label="Condensed View"
                            labelPlacement="start"
                            sx={{ pr: '10px' }}
                        />
                        <FormControl size="small">
                            <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
                            <Select
                                labelId="timeframe-select-label"
                                id="timeframe-select"
                                value={timeFrame}
                                label="Time Frame"
                                onChange={(e) => setTimeFrame(e.target.value)}
                                sx={{ minWidth: 120, position: 'relative' }}
                            >
                                <MenuItem value="1 hour">1 hour</MenuItem>
                                <MenuItem value="8 hours">8 hours</MenuItem>
                                <MenuItem value="1 day">1 Day</MenuItem>
                                <MenuItem value="3 days">3 Days</MenuItem>
                                <MenuItem value="7 days">7 Days</MenuItem>
                                <MenuItem value="14 days">14 Days</MenuItem>
                                <MenuItem value="28 days">28 Days</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                }
                sx={{ '& .MuiCardHeader-title': { fontWeight: '600' } }}
            />
            <Box sx={{ height: 300, width: '100%' }}>
                {loading ? <CircularLoad /> : error ? <Typography>{error}</Typography> : newPairs.length > 0 ? (
                    <DataGrid
                        rows={newPairs}
                        columns={NewPairsColumns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        getRowId={(row) => row.pair_id || Math.random()}
                        density={density}
                    />
                ) : <NoResults />}
            </Box>
        </Card>
    );
}

export default NewPairsTable;
