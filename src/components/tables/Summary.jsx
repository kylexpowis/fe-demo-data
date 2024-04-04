import { getSummary } from "../../../config/api";
import { useEffect, useState } from "react";

export const Summary = () => {
  const [pairs, setPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSummary()
      .then((data) => {
        setPairs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Summary Table</h2>
      {pairs.map((pair) => (
        <p>
          {pair.coin_name}
          {pair.symbol}
          {pair.pairs_added}
          {pair.pairs_removed}
          {pair.pair_count}
        </p>
      ))}
    </div>
  );
};
