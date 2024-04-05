import React, { useEffect, useState } from 'react'
import { getNewPairs } from '../../../config/api'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    TableContainer,
    Pagination,
    PaginationItem,
    Box,
    Link as MuiLink,
} from "@mui/material";
import { format } from "date-fns";

export default function NewPairTable() {
    const [newPairs, setNewPairs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getNewPairs()
            .then((pairs) => {
                console.log(pairs);
                setNewPairs(pairs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch new pairs.", err);
                setLoading(false);
            });
    }, []);

    const pairsPerPage = 1;
    const totalPairs = newPairs.length;
    const totalPages = Math.ceil(totalPairs / pairsPerPage);
    const startIndex = (page - 1) * pairsPerPage;
    const endIndex = startIndex + pairsPerPage;
    const currentPairs = newPairs.slice(startIndex, endIndex);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const renderTableRows = () => {
        if (newPairs.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={2}>No New Pairs</TableCell>
                </TableRow>
            );
        }

        return currentPairs.slice(0, 10).map((pair, index) => (
            <TableRow key={index}>
                <TableCell>{pair.pair_name}</TableCell>
                <TableCell>{format(new Date(pair.date_added), "PPpp")}</TableCell>
                <TableCell>{String(pair.is_active)}</TableCell>
            </TableRow>
        ));
    };

    if (loading) return <Typography>Loading...</Typography>;
    return (
        <>
            <Typography variant="h5" component="div">
                New Pairs
            </Typography>
            <TableContainer>
                <Table aria-label="new pairs table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Coin Name</TableCell>
                            <TableCell>Date Added</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderTableRows()}</TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination sx={{ marginTop: '67px', alignItems: 'center', alignContent: 'center' }}
                    count={totalPages}
                    page={page}
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
    );
}

{/* <div>
    <h2>New Pairs Table</h2>
    {Array.isArray(newPairs) && newPairs.length > 0 ? newPairs.map((pair) => (
        <p>
            {pair.pair_name}
            {format(new Date(pair.date_added), "PPpp")}
            {pair.is_active}
        </p>
    )) : (
        <p>
            No New Pairs
        </p>
    )}
</div> */}