import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoinById } from "../../../../config/api";

export function SingleCoinSummary() {
  const [coin, setCoin] = useState();
  const [isloading, setLoading] = useState(true);
  const { coin_id } = useParams();

  useEffect(() => {
    getCoinById(coin_id)
      .then((result) => {
        setCoin(result);
        console.log(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching coin summary", err);
      });
  }, [coin_id]);

  if (isloading) return <p>Loading...</p>;
  return (
    <div>
      <p>
        {coin.coin_name}
        {coin.symbol}
        {coin.current_marketcap}
        {coin.current_volume}
        {coin.vol_percentage_change}
        {coin.volume_over_marketcap}
      </p>
    </div>
  );
}
