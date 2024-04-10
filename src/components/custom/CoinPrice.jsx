import React, { useState, useEffect } from 'react';
import { livePrice } from '../../../config/api';

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
        return <div>Error fetching live price data.</div>;
    }

    if (priceChange === null) {
        return <div>Loading...</div>;
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
                {priceChange}%
            </>
        )
    }
};

export default CoinPrice;
