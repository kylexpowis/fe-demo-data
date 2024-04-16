import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Tooltip } from '@mui/material';

const PriceChangeIndicator = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'isPositive'
})(({ theme, isPositive }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: '600',
    height: '100%',
    color: isPositive ? theme.palette.success.main : theme.palette.error.main,
}));

const ValueDifference = styled('span')(({ isPositive, theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.65rem',
    marginLeft: '4px',
    paddingTop: '3px',
    color: isPositive ? theme.palette.success.main : theme.palette.error.main,
}));

const HighAlertIcon = ({ value }) => {
    if (value < 5) {
        return (
            <Tooltip title="Large changes detected. Investigate for opportunities." arrow>
                <PriorityHighIcon fontSize="small" sx={{ ml: 0.5, color: '#e7b63e' }} />
            </Tooltip>
        );
    }
    return null;
};

const ChangeIndicator = ({ value, toFixed = 2 }) => {
    const isValuePositive = value >= 0;
    const Icon = isValuePositive ? ArrowDropUpIcon : ArrowDropDownIcon;
    const difference = value - (useRef(value).current);
    useRef(value).current = value;  

    const animationClass = difference > 0 ? 'flash-green' : 'flash-red';

    return (
        <PriceChangeIndicator isPositive={isValuePositive} className={animationClass}>
            <Icon fontSize="inherit" />
            {parseFloat(value.toFixed(toFixed))}%
            {difference !== 0 && (
                <ValueDifference isPositive={difference > 0}>
                    ({difference > 0 ? '+' : ''}{difference.toFixed(toFixed)})%
                    <HighAlertIcon/>
                </ValueDifference>
            )}
        </PriceChangeIndicator>
    );
};

export default ChangeIndicator;