import { Box, Link as MuiLink } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import moment from 'moment/moment';
import { replaceSlashWithUnderscore } from '@/lib/utils';

export const PairsColumns = [
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