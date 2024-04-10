import { getVolumeChange } from "../../../config/api";
import LoadingScreen from "../custom/LoadingScreen";
import React, { useEffect, useState } from "react";
import CircularLoad from "../custom/CircularLoad";
import { DataGrid } from "@mui/x-data-grid";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Link as MuiLink,
  FormControlLabel,
  Switch
} from "@mui/material";

const PriceChangeIndicator = styled(Typography)(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  fontSize: '0.9rem',
  fontWeight: '600'
}));

const ChangeIndicator = ({ value }) => {
  const isPositive = value > 0;
  const Icon = isPositive ? ArrowDropUpIcon : ArrowDropDownIcon;
  const color = isPositive ? 'success.main' : 'error.main';

  return (
    <PriceChangeIndicator sx={{ color }}>
      <Icon fontSize="inherit" sx={{alignSelf: 'center', fontSize: '1.25rem'}}/>
      {value.toFixed(2)}%
    </PriceChangeIndicator>
  );
};

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [density, setDensity] = useState('standard');

  useEffect(() => {
    setLoading(true);
    getVolumeChange()
      .then((coins) => {
        const deduplicatedCoins = deduplicateCoins(coins);
        setCoins(deduplicatedCoins);
      })
      .catch((err) => {
        console.error("Failed to fetch 24hr volume data.", err);
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  const deduplicateCoins = (fetchedCoins) => {
    const uniqueCoins = new Map();
    fetchedCoins.forEach((coin) => {
      uniqueCoins.set(coin.coin_id, coin);
    });
    return Array.from(uniqueCoins.values());
  };

  const handleDensityChange = (event) => {
    setDensity(event.target.checked ? 'compact' : 'standard');
  };

  const columns = [
    {
      field: "logo_url",
      headerName: "",
      type: "string",
      width: 50,
      flexGrow: 0,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
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
      field: "volume_over_marketcap",
      headerName: "Volume/Marketcap",
      type: "int",
      flex: 1,
      renderCell: (params) => <ChangeIndicator value={parseFloat(params.value)}/> ?? "—",
    }
  ];

  if (loading) {
    return (
      <>
        <LoadingScreen />
      </>
    )
  }

  return (
    <Card
      sx={{
        ":hover": {
          outline: "1px solid #cccccc",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardHeader
        title="Volume/MarketCap"
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
        action={
          <FormControlLabel
            control={<Switch checked={density === 'compact'} onChange={handleDensityChange} />}
            label="Condensed View"
            labelPlacement="start"
            sx={{ pr: '10px' }}
          />
        }
      >
      </CardHeader>
      <Box sx={{ height: 1200, width: "100%" }}>
        {loading ? (
          <CircularLoad />
        ) : coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            loading={loading}
            getRowId={(row) => row.coin_id || Math.random()}
            density={density}
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Card>
  );
}

export default VolumeRankingTable;
