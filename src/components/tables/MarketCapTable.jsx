import React, { useEffect, useState } from "react";
import { getMarketCapStats } from "../../../config/api";

function MarketCapTable() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getMarketCapStats()
      .then((coins) => {
        console.log(coins);
        setCoins(coins);
      })
      .catch((err) => {
        console.error("Failed to fetch marketcap data.", err);
      });
  }, []);
  return (
    <div>
      <h2>Market Cap Table</h2>
      {coins.map((coin, index) => (
        <p key={index}>
          {coin.coin_name}
          {coin.symbol}
          {coin.marketcap_percentage_change}
          {coin.latest_timestamp}
        </p>
      ))}
    </div>
  );
}

export default MarketCapTable;