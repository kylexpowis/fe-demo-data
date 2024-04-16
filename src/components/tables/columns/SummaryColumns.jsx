import { Link } from "react-router-dom";
import { Box, Link as MuiLink } from "@mui/material";

export const SummaryColumns = [
  {
    field: "logo_url",
    headerName: "",
    type: "string",

    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {params.value ? (
          <img
            src={params.value}
            alt={params.row.coin_name}
            style={{
              width: "1.25rem",
              height: "1.25rem",
              borderRadius: "50%",
              border: "none",
            }}
          />
        ) : (
          <span> </span>
        )}
      </Box>
    ),
  },
  {
    field: "symbol",
    headerName: "Symbol",
    type: "string",
    flexGrow: 0,
    renderCell: (params) => (
      <MuiLink
        component={Link}
        to={`/coins/${params.row.coin_id}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: "0.75rem",
          fontWeight: "bold",
          color: "inherit",
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {params.value}
      </MuiLink>
    ),
  },
  {
    field: "coin_name",
    headerName: "Coin Name",
    type: "string",
    flex: 1,
    renderCell: (params) => (
      <span style={{ opacity: 0.7, fontWeight: "600", fontSize: "0.75rem" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "pairs_added",
    headerName: "Pairs Added (24h)",
    type: "int",
    flex: 1,
    renderCell: (params) =>
      <span style={{ fontSize: "0.75rem" }}>{params.value}</span> ?? "—",
  },
  {
    field: "pairs_removed",
    headerName: "Pairs removed (24h)",
    type: "int",
    flex: 1,
    renderCell: (params) =>
      <span style={{ fontSize: "0.75rem" }}>{params.value}</span> ?? "—",
  },
  {
    field: "pair_count",
    headerName: "Total Pairs",
    type: "int",
    flex: 1,
    renderCell: (params) =>
      <span style={{ fontSize: "0.75rem" }}>{params.value}</span> ?? "—",
  },
];
