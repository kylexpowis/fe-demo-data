import { getSummary } from "../../../config/api";
import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

export const Summary = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    getSummary()
      .then((data) => {
        setCoins(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  if (isLoading) return <p>Loading...</p>;

  const totalCoins = coins.length;
  const totalPages = Math.ceil(totalCoins / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalCoins);
  const paginatedCoins = coins.slice(startIndex, endIndex);

  return (
    <>
      <Typography variant="h5" component="div">
        Summary
      </Typography>
      <TableContainer>
        <Table aria-label="coin table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                }}
              >
                Coin Name
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                }}
              >
                Symbol
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                }}
              >
                Pairs Added (24hr)
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                }}
              >
                Pairs Removed (24hr)
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                }}
              >
                Pair Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCoins.map((coin) => (
              <TableRow key={coin.coin_name}>
                <TableCell style={{ width: "fit-content" }}>
                  <MuiLink
                    component={Link}
                    to={`/coins/${coin.coin_id}`}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <img
                      src={coin.logo_url}
                      alt="coin icon"
                      style={{
                        width: "24px",
                        marginRight: "8px",
                        padding: "0",
                      }}
                    />
                    {coin.coin_name}
                  </MuiLink>
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  {coin.symbol}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  {coin.pairs_added}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  {coin.pairs_removed}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  {coin.pair_count}
                </TableCell>
              </TableRow>
            ))}
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
                  background:
                    item.page === page
                      ? "linear-gradient(to right, #00e99b, #4fd1c5)"
                      : "transparent",
                  color: "white",
                }}
              />
            )}
          />
          <Select
            id="rowCount"
            sx={{ height: "30px" }}
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            variant="outlined"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </div>
      </Grid>
    </>
  );
};
