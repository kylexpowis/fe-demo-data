import {React, useEffect, useState} from 'react'
import { getNewCoins } from '../../../config/api'

export default function NewCoinTable() {
    const [newCoins, setNewCoins] = useState([])
    const [timeFrame, setTimeFrame] = useState('1 day')
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        getNewCoins(timeFrame)
            .then((coins) => {
                setNewCoins(coins);
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setIsLoading(false));
    }, [timeFrame]);

    const handleChange = (event) => setTimeFrame(event.target.value);
    return (
        <div>
            {Array.isArray(newCoins) && newCoins.length > 0 ? newCoins.map((coin) => (
                <p>
                    {coin.id}
                    {coin.coin_name}
                    {dateadded}
                </p>
            )) : (
                <p>
                    No New Coins
                </p>    
            )}
        </div>
    )
}
