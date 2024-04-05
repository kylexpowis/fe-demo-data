import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getPairsByCoinId } from '../../../../config/api';

export function SingleCoinPairs() {
    const [pairs, setPairs] = useState();
    const [isloading, setLoading] = useState(true);
    const { coin_id } = useParams();

    useEffect(() => {
        getPairsByCoinId(coin_id)
            .then((result) => {
                setPairs(result);
                console.log(result, 'this is res');
                console.log(result);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching coin summary", err);
            });
    }, [coin_id]);

    if (isloading) return <p>Loading...</p>;
    console.log(pairs, 'this is pairs');
    return (
        <div>
            <h1>Pairs By Coin</h1>
            {pairs.map((pair) => (
                <p key={pair.pair_name}>
                    {pair.pair_name}
                    {String(pair.is_active)}
                    {pair.date_added}
                    {pair.current_volume}
                    {pair.base_logo_url}
                    {pair.quote_logo_url}
                </p>
            ))}
            
        </div>
    )
}
