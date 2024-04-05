import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getPairsByCoinId } from '../../../../config/api';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    TableContainer,
    Link as MuiLink,
    Pagination,
    Grid,
    MenuItem,
    PaginationItem,
    Select,
} from "@mui/material";
import { Link } from 'react-router-dom'
import { format } from "date-fns";

export function SingleCoinPairs() {
    const [pairs, setPairs] = useState();
    const [isloading, setLoading] = useState(true);
    const { coin_id } = useParams();
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    useEffect(() => {
        getPairsByCoinId(coin_id)
            .then((result) => {
                setPairs(result);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching coin summary", err);
            });
    }, [coin_id]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(1);
    }

    if (isloading) return <p>Loading...</p>;
    
    const totalCoins = pairs.length;
    const totalPages = Math.ceil(totalCoins / rowsPerPage);
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, totalCoins);
    const paginatedPairs = pairs.slice(startIndex, endIndex);

    return (
        <>
            <Typography variant="h6" component="div">
                All Pairs Overview
            </Typography>
            <TableContainer>
                <Table aria-label="coin table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pair Name</TableCell>
                            
                            <TableCell>Is Active</TableCell>
                            <TableCell>Date Added</TableCell>
                            <TableCell>Base Logo</TableCell>
                            <TableCell>Quote Logo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedPairs.map((pair) => {
                            return (
                                <TableRow key={pair.pair_name}>
                                    <TableCell style={{ width: 'fit-content' }}>{pair.pair_name}</TableCell>
                                    <TableCell>
                                        {pair.is_active ? (
                                            <Typography style={{ color: 'green' }}>Active</Typography>
                                        ) : (
                                            <Typography style={{ color: 'red' }}>Removed</Typography>
                                        )}
                                    </TableCell>
                                    <TableCell style={{ width: 'fit-content' }}>{format(new Date(pair.date_added), 'PPpp')}</TableCell>
                                    <TableCell style={{ width: 'fit-content' }}>
                                        {<img src={pair.base_logo_url} alt="coin icon" style={{ width: "24px", marginRight: '8px' }} />}
                                    </TableCell>
                                    <TableCell style={{ width: 'fit-content' }}>
                                        {<img src={pair.quote_logo_url} alt="coin icon" style={{ width: "24px", marginRight: '8px' }} />}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justifyContent="center" marginTop={2} marginBottom={2}>
                <div className="rowSelect">
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChangePage}
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
                    <Select id="rowCount" sx={{ height: "30px" }} value={rowsPerPage} onChange={handleChangeRowsPerPage} variant="outlined">
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </div>
            </Grid>

        </>
    )
}

// {
//     pairs.map((pair) => (
//         <p key={pair.pair_name}>
//             {pair.pair_name}
//             {String(pair.is_active)}
//             {pair.date_added}
//             {pair.current_volume}
//             {pair.base_logo_url}
//             {pair.quote_logo_url}
//         </p>
//     ))
// }