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
