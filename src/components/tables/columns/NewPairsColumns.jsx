import moment from "moment/moment";
import { Link as MuiLink } from '@mui/material';

export const NewPairsColumns = [
    {
        field: 'pair_name',
        headerName: 'Pair Name',
        flex: 1,
        renderCell: (params) => (
            <MuiLink to={`/coins/${params.row.coin_id}`} target="_blank" rel="noopener noreferrer"
                sx={{
                    fontSize: '0.75rem',
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
            </MuiLink>
        )
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
                <span style={{ color: params.value ? 'green' : 'red', fontSize: '0.75rem' }}>
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
        renderCell: (params) => <span style={{ fontSize: '0.75rem' }}>{moment(params.value).format('lll')}</span> ?? '—',
    },
];