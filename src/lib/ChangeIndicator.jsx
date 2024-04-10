import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const PriceChangeIndicator = styled(Typography)(() => ({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: '600',
}));

const ChangeIndicator = ({ value }) => {
    const isPositive = value > 0;
    const Icon = isPositive ? ArrowDropUpIcon : ArrowDropDownIcon;
    const color = isPositive ? 'success.main' : 'error.main';

    return (
        <PriceChangeIndicator sx={{ color }}>
            <Icon fontSize="inherit" sx={{ alignSelf: 'center', fontSize: '1.25rem' }} />
            {value.toFixed(2)}%
        </PriceChangeIndicator>
    );
};

export default ChangeIndicator;
