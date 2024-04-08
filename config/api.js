export const getNewCoins = (timeFrame = "1 day") => {
    console.log(timeFrame);
    let apiUrl = "https://pairs-sniper-api-v1-0-release.onrender.com/api/coins/new";
    const timeFrameMap = {
        "1 hour": "1+hour",
        "8 hours": "8+hours",
        "1 day": "1+day",
        "3 days": "3+days",
        "7 days": "7+days",
        "28 days": "28+days",
    };

    if (timeFrame in timeFrameMap) {
        apiUrl += `?timeframe=${timeFrameMap[timeFrame]}`;
    }
    return fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data.coins;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            throw error;
        });
};

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

export const getNewPairs = (timeFrame) => {
    const timeFrameMap = {
        "1 hour": "1+hour",
        "8 hours": "8+hours",
        "1 day": "1+day",
        "3 days": "3+days",
        "7 days": "7+days",
        "28 days": "28+days",
    };
    let apiUrl = "https://pairs-sniper-api-v1-0-release.onrender.com/api/pairs/new";
    if (timeFrame in timeFrameMap) {
        apiUrl += `?timeframe=${timeFrameMap[timeFrame]}`;
    }
    return fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            return data.pairs;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getMarketCapStats = () => {
    return fetch(
        "https://pairs-sniper-api-v1-0-release.onrender.com/api/rankings/marketcap"
    )
        .then((res) => res.json())
        .then((data) => {
            return data.coins;
        })
        .catch((error) => {
            console.log(error);
        });
};


export const getPairsByCoinId = (coin_id) => {
    return fetch(
        `https://pairs-sniper-api-v1-0-release.onrender.com/api/pairs/${coin_id}`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.pairById;
        });
}

export const getVolumeChange = () => {
    return fetch(
        "https://pairs-sniper-api-v1-0-release.onrender.com/api/rankings/volumeroc"
    )
        .then((res) => res.json())
        .then((data) => {
            return data.coins;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const livePrice = (coinSymbol, callBack, p) => {
    const connectWebSocket = () => {
        const ws = new WebSocket(
            `wss://stream.binance.com:9443/ws/${coinSymbol.toLowerCase()}usdt@ticker`
        );

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const priceChange = parseFloat(data[p]);
            callBack(null, priceChange);
        };

        ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
            callBack(error, null);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return ws;
    };

    const ws = connectWebSocket();


    return () => {
        ws.close();
    };
}

export const getVolumeData = (coin_id) => {
    return fetch(`https://pairs-sniper-api-v1-0-release.onrender.com/api/volumemarketcap/${coin_id}`)
    .then((res) => {
        return res.json()
    }).then((data) => {
        return data.volume
    })
    .catch((error) => {
        console.error('Error fetching volume:', error);
    });
}
