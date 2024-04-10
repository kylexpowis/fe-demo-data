import React, { useState, useEffect } from 'react';
import { livePrice } from '../../../config/api';
import { CircularProgress, Box, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

const PriceChangeIndicator = styled(Typography)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '5px',
}));

const ChangeIndicator = ({ value }) => {
    const isPositive = value > 0;
    const Icon = isPositive ? ArrowDropUpIcon : ArrowDropDownIcon;
    const color = isPositive ? 'success.main' : 'error.main';

    return (
        <PriceChangeIndicator sx={{ color }}>
            <Icon fontSize="inherit" />
            {value.toFixed(2)}%
        </PriceChangeIndicator>
    );
};

const CoinPrice = ({ coinSymbol, p }) => {
    const [priceChange, setPriceChange] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleNewPrice = (err, newPriceChange) => {
            if (err) {
                setError(err.message || 'An error occurred');
            } else {
                setPriceChange(newPriceChange);
                setError(null);
            }
        };

        const stopLivePrice = livePrice(coinSymbol, handleNewPrice, p);

        return () => {
            stopLivePrice();
        };
    }, [coinSymbol, p]);

    if (error) {
        return <Box sx={{ w: '100%', h: '100%' }}>
            <CircularProgress color="inherit" />
        </Box>;
    }

    if (priceChange === null) {
        return <CircularProgress color="inherit" />;
    }

    const formattedPriceChange = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
    }).format(priceChange);

    if (p === 'o') {
        return (
            <>
                {formattedPriceChange}
            </>
        )
    } else {
        return (
            <>
            <ChangeIndicator value={priceChange} />
            </>
        )
    }
};

export default CoinPrice;
