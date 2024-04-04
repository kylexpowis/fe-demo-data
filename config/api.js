export const getSummary = () => {
  return fetch(
    "https://pairs-sniper-api-v1-0-release.onrender.com/api/pairs/summary"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.pairs;
    });
};

export const getCoinById = (coin_id) => {
  return fetch(
    `https://pairs-sniper-api-v1-0-release.onrender.com/api/coins/${coin_id}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.coin;
    });
};
