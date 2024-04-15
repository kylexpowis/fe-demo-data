import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/css';

const flashGreen = keyframes`
    from, 50% { color: rgba(74, 240, 164, 1); }   
    to { color: isPositive ? 'success.main' : 'error.main' }
`;

const flashRed = keyframes`
    from, 50% { color: rgba(234, 57, 67, 1); }   
    to { color: isPositive ? 'success.main' : 'error.main' }
`;

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

const ChangeIndicator = ({ value, toFixed = 2 }) => {
    const [prevValue, setPrevValue] = useState(value);
    const [difference, setDifference] = useState(0);
    const [hasChanged, setHasChanged] = useState(false);
    const [animationCss, setAnimationCss] = useState("");

    useEffect(() => {
        if (prevValue !== value) {
            const diff = value - prevValue;
            const isValueIncreased = diff > 0;

            setDifference(diff);
            setHasChanged(true);

            const animationKeyframe = isValueIncreased ? flashGreen : flashRed;
            setAnimationCss(css`
                animation: ${animationKeyframe} 1.5s ease-out forwards;
            `);
            
            setPrevValue(value);
        }
    }, [value, prevValue]);

    const isValuePositive = value >= 0;  
    const Icon = isValuePositive ? ArrowDropUpIcon : ArrowDropDownIcon;  

    return (
        <PriceChangeIndicator isPositive={isValuePositive} className={animationCss}>
            <Icon fontSize="inherit" sx={{ alignSelf: 'center', fontSize: '1.25rem' }} />
            {parseFloat(value.toFixed(toFixed))}%
            {hasChanged && (
                <ValueDifference isPositive={difference > 0}>
                    ({difference > 0 ? '+' : ''}{difference.toFixed(toFixed)})%
                </ValueDifference>
            )}
        </PriceChangeIndicator>
    );
};

export default ChangeIndicator;