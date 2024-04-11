import { Link } from "react-router-dom";
import { Box, Link as MuiLink } from "@mui/material";
import moment from "moment/moment";

export const NewCoinsColumns = [
    {
        field: "logo_url",
        headerName: "",
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
        flex: 1,
        renderCell: (params) => (
            <span style={{ opacity: 0.7, fontWeight: "600" }}>{params.value}</span>
        ),
    },
    {
        field: "is_active",
        headerName: "Status",
        renderCell: (params) => {
            if (params.value === null || params.value === undefined) {
                return <span>—</span>;
            }
            return (
                <span style={{ color: params.value ? "green" : "red" }}>
                    {params.value ? "Active" : "Inactive"}
                </span>
            );
        },
    },
    {
        field: "date_added",
        headerName: "Date Added",
        type: "timestamp",
        flex: 1,
        renderCell: (params) => moment(params.value).format("lll") ?? "—",
    },
];