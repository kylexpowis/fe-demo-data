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

const StatTypography = styled(Typography)({
  fontSize: '0.9rem',
  color: 'rgba(0, 0, 0, 0.6)',
  margin: '8px 0',
});

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

  return (
    <Box sx={{ width: '100%', height: '100vh', overflowY: 'auto' }}>
      <Stack direction="column" spacing={2}>
        {coin && (
          <>
            <Typography variant="h5" component="div" sx={{ fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              <img src={coin.logo_url} alt={`${coin.coin_name} logo`} style={{ width: '25px', height: '25px', marginRight: '8px' }} />
              {coin.coin_name}
              <Typography component="span" sx={{ pl: '8px', pt: '4px', fontWeight: '600', color: '#6c707d' }}>{coin.symbol}</Typography>
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

      <Box sx={{
        pt: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
      }}>
        <Box>
          <Typography sx={{pt: '75px'}}>Market cap {coin?.current_marketcap}</Typography>
          <Typography sx={{pt: '75px'}}>Volume (24h) {coin?.current_volume}</Typography>
          <Typography sx={{ pt: '75px' }}>Volume / Market cap {coin.volume_over_marketcap}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
