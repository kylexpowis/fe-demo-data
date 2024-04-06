import React, { useEffect, useState } from "react";
import { getVolumeChange } from "../../../config/api";

function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getVolumeChange()
      .then((coins) => {
        console.log(coins);
        setCoins(coins);
      })
      .catch((err) => {
        console.error("Failed to fetch 24hr volume data.", err);
      });
  }, []);
  return (
    <div>
      <h2>Vol 24 Hour Table</h2>
      {coins.map((coin, index) => (
        <p key={index}>
          {coin.coin_name}
          {coin.symbol}
          {coin.volume_over_marketcap}
          {coin.timestamp}
        </p>
      ))}
    </div>
  );
}

export default VolumeRankingTable;
