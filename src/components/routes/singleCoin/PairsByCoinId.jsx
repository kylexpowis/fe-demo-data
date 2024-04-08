import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getPairsByCoinId } from '../../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Link, Paper, CardHeader } from '@mui/material';
import moment from 'moment/moment';
import NoResults from '@/components/custom/NoResults';
import LoadingScreen from '@/components/custom/LoadingScreen';

export function PairsByCoinId() {
    const [pairs, setPairs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { coin_id } = useParams();

    useEffect(() => {
        setLoading(true)
        getPairsByCoinId(coin_id)
            .then((pairs) => {
                console.log(pairs);
                setPairs(pairs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching coin summary", err);
            });
    }, [coin_id]);

    const columns = [
        {
            field: 'pair_name',
            headerName: 'Pair Name',
            flex: 1,
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
            field: 'is_active',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => (
                <span style={{ color: params.value ? 'green' : 'red' }}>
                    {params.value ? 'Active' : 'Inactive'}
                </span>
            ),
        },
        {
            field: 'date_added',
            headerName: 'Date Added',
            type: 'timestamp',
            flex: 1,
            renderCell: (params) => moment(params.value).format('lll') ?? '—',
        },
        {
            field: 'base_logo_url',
            headerName: 'Base Logo',
            width: 130,
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
            field: 'quote_logo_url',
            headerName: 'Quote Logo',
            width: 130,
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
    ];

    return (
        <>
            <Box sx={{ height: '800px', width: '100%', padding: 10 }}>
                {loading ? (
                    <LoadingScreen />
                ) : pairs.length > 0 ? (
                    <DataGrid
                        rows={pairs}
                        columns={columns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        loading={loading}
                        getRowId={(row) => row.coin_id || Math.random()}
                        className='MuiDataGrid-virtualScroller'
                            sx={{
                                borderRadius: '0',
                            }}
                    />
                ) : (
                    <NoResults />
                )}
            </Box>
        </>
    );
}

