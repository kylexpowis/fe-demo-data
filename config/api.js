export const getNewCoins = (timeFrame = '1 day') => {
    console.log(timeFrame);
    let apiUrl = "https://pairs-sniper-api-v1-0-release.onrender.com/api/coins/new";
    const timeFrameMap = {
        '1 hour': '1+hour',
        '1 day': '1+day',
        '3 days': '3+days',
        '7 days': '7+days',
        '28 days': '28+days',
    };

    if (timeFrame in timeFrameMap) {
        apiUrl += `?timeframe=${timeFrameMap[timeFrame]}`;
    }
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (!data.coins || data.coins.length === 0) {
                return 'No new coins found for the selected timeframe.';
            }
            return data.coins;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error;
        });
};
