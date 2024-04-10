import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCoinById } from '../../../../config/api';
import { Box, Typography, Stack, Divider } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import CoinPrice from '@/components/custom/CoinPrice';

const PriceTypography = styled(Typography)({
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  fontSize: '2.5rem',

});

const PriceChangeIndicator = styled(Typography)(({ theme, isPositive }) => ({
  color: isPositive ? theme.palette.success.main : theme.palette.error.main,
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: '5px'
}));

export function CoinSummary() {
  const [coin, setCoin] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { coin_id } = useParams();

  useEffect(() => {
    getCoinById(coin_id)
      .then((result) => {
        setCoin(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching coin summary", err);
      });
  }, [coin_id]);

  if (isLoading) return <Typography>Loading...</Typography>;

  let PriceChangeIcon = ArrowDropUpIcon;
  let isPositiveChange = null;

  if (coin) {
    isPositiveChange = coin.price_change_percentage > 0;
    PriceChangeIcon = isPositiveChange ? ArrowDropUpIcon : ArrowDropDownIcon;
  }

  function formatCurrency(value) {
    if (value === null || value === undefined || isNaN(value)) return "—";

    const stringValue = Number(value).toFixed(0);
    const withCommas = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${withCommas}`;
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', overflowY: 'auto', padding: '10px' }}>
      <Stack direction="column" spacing={2}>
        {coin && (
          <>
            <Typography variant="h5" component="div" sx={{ fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              <img src={coin.logo_url} alt={`${coin.coin_name} logo`} style={{ width: '25px', height: '25px', marginRight: '8px', borderRadius: '25px' }} />
              {coin.coin_name}
              <Typography component="span" sx={{ pl: '3px', pt: '5px', fontWeight: '600', color: '#6c707d' }}>{coin.symbol}</Typography>
            </Typography>

            <Stack direction={'row'}>
              <PriceTypography variant="h3">
                <CoinPrice coinSymbol={coin.symbol} p={'o'} />
              </PriceTypography>

              <PriceTypography variant="h3">
                {isPositiveChange !== null && (
                  <PriceChangeIndicator isPositive={isPositiveChange}>
                    <PriceChangeIcon fontSize="inherit" />
                    <CoinPrice coinSymbol={coin.symbol} p={'P'} />
                    <Typography variant="caption" sx={{ fontSize: 'inherit', fontWeight: '500' }}>(1d)</Typography>
                  </PriceChangeIndicator>
                )}
              </PriceTypography>
            </Stack>
          </>
        )}
      </Stack>

      <Box sx={{ mt: '2rem', width: '100%', h: '20vh', pt: '25px'}}>
        <Typography variant='h4'>Pair Information</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '25px'}}>
          <Typography variant="subtitle1" fontWeight="500">Total Pairs</Typography>
          <Typography variant="body2" fontWeight="regular">{coin.pair_count}</Typography>
        </Stack>
        <Divider variant="full" />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '40px'}}>
          <Typography variant="subtitle1" fontWeight="500">New Pairs (24h)</Typography>
          <Typography variant="body2" fontWeight="regular">{coin.pairs_added_last_24_hours}</Typography>
        </Stack>
        <Divider variant="full" />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '40px'}}>
          <Typography variant="subtitle1" fontWeight="500">New Pairs (7d)</Typography>
          <Typography variant="body2" fontWeight="regular">{coin.pairs_added_last_24_hours}</Typography>
        </Stack>
        <Divider variant="full" />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '40px'}}>
          <Typography variant="subtitle1" fontWeight="500">Pairs Removed This Week</Typography>
          <Typography variant="body2" fontWeight="regular">{coin.pairs_removed_this_week}</Typography>
        </Stack>
        <Divider variant="full" />
      </Box>

      <Box sx={{ mt: '2rem', width: '100%', h: '20vh', pt: '25px'}} >
      <Typography variant='h4'>Market Data</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '25px'}}>
        <Typography variant="subtitle1" fontWeight="500">Marketcap</Typography>
        <span style={{ display: 'inline-flex' }}>
          <Typography variant="body2" fontWeight="regular">{coin.marketcap_percentage_change}%</Typography>
          <Typography variant="body2" fontWeight="regular" sx={{ ml: '5px' }}>{formatCurrency(coin.current_marketcap)}</Typography>
        </span>
      </Stack>
      <Divider variant="full" />

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '40px'}}>
        <Typography variant="subtitle1" fontWeight="500">Volume</Typography>
        <span style={{ display: 'inline-flex' }}>
          <Typography variant="body2" fontWeight="regular">{parseFloat(coin.vol_percentage_change).toFixed(2)}%</Typography>
          <Typography variant="body2" fontWeight="regular" sx={{ ml: '5px' }}>{formatCurrency(coin.current_marketcap)}</Typography>
        </span>
      </Stack>
        <Divider variant="full" />
        
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pt: '40px'}}>
        <Typography variant="subtitle1" fontWeight="500">Volume/Market Cap</Typography>
        <Typography variant="body2" fontWeight="regular">{parseFloat(coin.volume_over_marketcap).toFixed(2)}%</Typography>
      </Stack>
        <Divider variant="full" />
      </Box>
    </Box >
  );
}
