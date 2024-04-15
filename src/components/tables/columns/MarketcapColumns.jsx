import { Link } from "react-router-dom";
import ChangeIndicator from "@/lib/ChangeIndicator";
import { Box, Link as MuiLink } from "@mui/material";
import { formatCurrency } from "../../../lib/utils";

const MarketcapColumns = [
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
                            width: 30,
                            height: 30,
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
            <span style={{ opacity: 0.7, fontWeight: "600" }}>{params.value}</span>
        ),
    },
    {
        field: "current_marketcap",
        headerName: "Marketcap",
        type: "int",
        flex: 1,
        renderCell: (params) => formatCurrency(params.value, 0) ?? " ",
    },
    {
        field: "marketcap_percentage_change",
        headerName: "Change (%)",
        type: "int",
        flex: 1,
        renderCell: (params) => <ChangeIndicator value={params.value} toFixed={2}/> ?? "—",
    }
];

export default MarketcapColumns;