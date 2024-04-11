import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCoinById } from '../../../../config/api';
import { Box, Typography, Stack, Divider, Link } from '@mui/material';
import ChangeIndicator from '@/lib/ChangeIndicator';
import PriceTypography from '@/lib/PriceTypography';
import CoinPrice from '@/components/custom/CoinPrice';
import { formatCurrency } from '@/lib/utils';

export function CoinSummary() {
  const [coin, setCoin] = useState(null);
  const { coin_id } = useParams();

  useEffect(() => {
    getCoinById(coin_id)
      .then(result => {
        setCoin(result);
      })
      .catch(error => {
        console.error("Error fetching coin summary", error);
      });
  }, [coin_id]);

  if (!coin) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ width: '100%', height: '100vh', overflowY: 'auto', padding: '10px' }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h5" component="div" sx={{ fontWeight: '700', display: 'flex', alignItems: 'center' }}>
          <img src={coin.logo_url} alt={`${coin.coin_name} logo`} style={{ width: '25px', height: '25px', marginRight: '8px', borderRadius: '25px' }} />
          {coin.coin_name}
          <Typography component="span" sx={{ pl: '3px', pt: '5px', fontWeight: '600', color: '#6c707d' }}>{coin.symbol}</Typography>
        </Typography>

        <Stack direction={'row'}>
          <PriceTypography><CoinPrice coinSymbol={coin.symbol} p={'o'} /></PriceTypography>
          <PriceTypography><CoinPrice coinSymbol={coin.symbol} p={'P'} /></PriceTypography>
        </Stack>
      </Stack>

      <InformationSection title="Pair Information">
        <InformationRow label="Total Pairs" value={coin.pair_count} />
        <InformationRow label="New Pairs (24h)" value={coin.pairs_added_last_24_hours} />
        <InformationRow label="New Pairs (7d)" value={coin.pairs_added_this_week} />
        <InformationRow label="Pairs Removed This Week" value={coin.pairs_removed_this_week} />
      </InformationSection>

      <InformationSection title="Market Data">
        <InformationRow label="Marketcap" value={formatCurrency(coin.current_marketcap)} change={coin.marketcap_percentage_change} />
        <InformationRow label="Volume" value={formatCurrency(coin.current_volume)} change={coin.vol_percentage_change} />
        <InformationRow label="Volume/Market Cap" value={`${parseFloat(coin.volume_over_marketcap).toFixed(2)}%`} />
      </InformationSection>
    </Box>
  );
}

function InformationSection({ title, children }) {
  return (
    <Box sx={{ mt: '2rem' }}>
      <Typography variant='h4'>{title}</Typography>
      {children}
    </Box>
  );
}

function InformationRow({ label, value, change }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: '25px' }}>
        <Typography variant="subtitle1" fontWeight="500">{label}</Typography>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          {change !== undefined ? <ChangeIndicator value={parseFloat(change)} /> : null}
          <Typography sx={{ ml: change !== undefined ? '5px' : '0', fontWeight: '600', fontSize: '0.9rem' }}>{value}</Typography>
        </span>
      </Stack>
      <Divider variant="full" />
    </>
  );
}
