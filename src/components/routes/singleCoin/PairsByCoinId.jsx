import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import NoResults from '@/components/custom/NoResults';
import { getPairsByCoinId } from '../../../../config/api';
import { PairsColumns } from './columns/PairsColumns';
import CircularLoad from '@/components/custom/CircularLoad';

export function PairsByCoinId() {
    const [pairs, setPairs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { coin_id } = useParams();

    useEffect(() => {
        getPairsByCoinId(coin_id)
            .then((pairs) => {
                setPairs(pairs);
            })
            .catch((err) => {
                console.error("Error fetching coin summary", err);
                setError('Failed to fetch pairs for the specified coin.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [coin_id]);

    if (loading) return <CircularLoad />;
    if (error) return <Typography>{error}</Typography>;

    return (
        <Box sx={{ height: '440px', width: '100%' }}>
            {pairs.length > 0 ? (
                <DataGrid
                    rows={pairs}
                    columns={PairsColumns}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId={(row) => row.pair_id || Math.random()} 
                    sx={{
                        borderRadius: 0,
                        border: 'none',
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                        },
                        '& .MuiDataGrid-cell': {
                            borderBottomColor: '#e0e0e0',
                            '&:focus-within': {
                                outline: '2px solid #3FBF77',
                            },
                        },
                        '& .MuiDataGrid-columnHeaderTitleContainer:hover': {
                            color: '#34A853',
                        },
                    }}
                />
            ) : <NoResults />}
        </Box>
    );
}
