import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { getPairsByCoinId } from '../../../../config/api';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Link as MuiLink, Paper, CardHeader } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
                setPairs(pairs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching coin summary", err);
            });
    }, [coin_id]);

    const columns = [
        {
            field: 'quote_logo_url',
            headerName: '',
            width: 20,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
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
            field: 'pair_name',
            headerName: 'Pair Name',
            flex: 1,
            renderCell: (params) => (
                <Box sx={{
                    fontWeight: 'bold',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                    {params.value}
                    <MuiLink
                        href={`https://www.binance.com/en-GB/trade/${replaceSlashWithUnderscore(params.row.pair_name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            alignSelf: 'center',
                        }}
                    >
                        <OpenInNewIcon sx={{ ml: 0.5, color: '#474c5c', fontSize: '1rem' }}  />
                    </MuiLink>
                </Box>
            )
        },
        {
            field: 'date_added',
            headerName: 'Date Added',
            type: 'timestamp',
            flex: 1,
            renderCell: (params) => moment(params.value).format('lll') ?? '—',
        },
        {
            field: 'is_active',
            headerName: 'Status',
            flexGrow: 0,
            renderCell: (params) => (
                <span style={{ color: params.value ? 'green' : 'red' }}>
                    {params.value ? 'Active' : 'Inactive'}
                </span>
            ),
        },
    ];

    const replaceSlashWithUnderscore = (str) => {
        return str.replace(/\//g, '_');
    }

    return (
        <>
            <Box sx={{ height: '440px', width: '100%', }}>
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
                        sx={{
                            borderRadius: 0,
                            border: 'none',
                            '& .MuiDataGrid-columnHeader': {
                                backgroundColor: 'transparent',
                            },
                            '& .MuiDataGrid-columnHeaderTitle': {
                                backgroundColor: 'transparent',
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
                ) : (
                    <NoResults />
                )}
            </Box>
        </>
    );
}

