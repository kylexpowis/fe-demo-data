import {React, useEffect, useState} from 'react'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Typography,
    Box,
    Pagination,
    PaginationItem,
    Link as MuiLink
} from "@mui/material";
import { Link } from "react-router-dom";
import { getNewCoins } from '../../../config/api'
import { format } from "date-fns";

export default function NewCoinTable() {
    const [newCoins, setNewCoins] = useState([])
    const [timeFrame, setTimeFrame] = useState('1 day')
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        getNewCoins(timeFrame)
            .then((coins) => {
                setNewCoins(coins);
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setIsLoading(false));
    }, [timeFrame]);

    const newCoinsPerPage = 1;
    const totalnewCoins = newCoins.length;
    const totalPages = Math.ceil(totalnewCoins / newCoinsPerPage);
    const startIndex = (page - 1) * newCoinsPerPage;
    const endIndex = startIndex + newCoinsPerPage;
    const paginatedCoins = newCoins.slice(startIndex, endIndex);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleChange = (event) => setTimeFrame(event.target.value);
    return (
        <>
            {isLoading ? (
                <Typography sx={{ color: "white", textAlign: 'center', my: 2 }}>Loading...</Typography>
            ) : (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            component="div"
                        >
                            New Coins
                        </Typography>
                        <FormControl size="small">
                            <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
                            <Select
                                labelId="timeframe-select-label"
                                id="timeframe-select"
                                value={timeFrame}
                                onChange={handleChange}
                                label="Time Frame"
                            >
                                <MenuItem value="1 hour">1 Hour</MenuItem>
                                <MenuItem value="1 day">1 Day</MenuItem>
                                <MenuItem value="3 days">3 Days</MenuItem>
                                <MenuItem value="7 days">7 Days</MenuItem>
                                <MenuItem value="28 days">28 Days</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Coin Name</TableCell>
                                <TableCell>Date/Time Added</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(newCoins) && newCoins.length > 0 ? paginatedCoins.map((coin) => (
                                <TableRow key={coin.coin_id}>
                                    <TableCell>
                                        <MuiLink component={Link} to={`/coins/${coin.coin_name}`} sx={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                                            {<img src={coin.icon_url} alt="coin icon" style={{ width: "24px", marginRight: '8px' }} />}
                                            {coin.coin_name}
                                        </MuiLink>
                                    </TableCell>
                                    <TableCell >
                                        {format(new Date(coin.dateadded), 'PPpp')}
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        No New Coins
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination sx={{ marginTop: '60px', alignItems: 'center', alignContent: 'center' }}
                            count={totalPages} page={page}
                            onChange={handlePageChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    style={{
                                        background: item.page === page ? 'linear-gradient(to right, #00e99b, #4fd1c5)' : 'transparent',
                                        color: item.page === page ? 'white' : 'black',
                                    }}
                                />
                            )}
                        />
                    </Box>

                </>
            )}
        </>
    )
}
