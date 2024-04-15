import React, { useEffect, useRef, useState } from "react";
import { getVolumeChange } from "../../../config/api";
import LoadingScreen from "../custom/LoadingScreen";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Card, CardHeader, FormControlLabel, Switch } from "@mui/material";
import { VolumeColumns } from "./columns/VolumeColumns";
import { supabase } from "../../lib/supabaseClient";
import { keyframes } from '@emotion/react';
import { css } from '@emotion/css';

const flashGreen = keyframes`
  from, to { background-color: transparent; }
  10% { background-color: rgba(22, 199, 132, 0.9); }
  20% { background-color: rgba(22, 199, 132, 0.75); }  
  50% { background-color: rgba(22, 199, 132, 0.5); }   
  75% { background-color: rgba(22, 199, 132, 0.25); }
  90% { background-color: rgba(22, 199, 132, 0.1); }  
`;

const flashRed = keyframes`
  from, to { background-color: transparent; }
  10% { background-color: rgba(234, 57, 67, 0.9);}
  20% { background-color: rgba(234, 57, 67, 0.75); }  
  50% { background-color: rgba(234, 57, 67, 0.5); }  
  75% { background-color: rgba(234, 57, 67, 0.25); } 
  90% { background-color: rgba(234, 57, 67, 0.1); } 
`;


function VolumeRankingTable() {
  const [coins, setCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [density, setDensity] = useState('compact');
  const animatingCoinsRef = useRef(new Set());
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    fetchAndHandleData();
    const channel = setupRealtimeUpdates();

    return () => channel?.unsubscribe();
  }, []);

  useEffect(() => {
    if (updateAvailable) {
      setDisplayedCoins(coins);
      setUpdateAvailable(false);
    }
  }, [updateAvailable, coins]);

  const fetchAndHandleData = async () => {
    try {
      const fetchedCoins = await getVolumeChange();
      setCoins(deduplicateCoins(fetchedCoins));
      setUpdateAvailable(true);
    } catch (error) {
      console.error("Failed to fetch 24hr volume data.", error);
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeUpdates = () => {
    return supabase
      .channel('supabase_realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'vol24marketcap' }, handleRealtimeUpdate)
      .subscribe();
  };

  const handleRealtimeUpdate = (payload) => {
    setCoins(prevCoins => {
      const updatedCoins = prevCoins.map(updateCoinData(payload));
      setUpdateAvailable(true);
      return updatedCoins;
    });
  };

  const updateCoinData = payload => coin => {
    if (coin.coin_id !== payload.new.coin_id) return coin;
    const isNewHigher = payload.new.volume_over_marketcap > coin.volume_over_marketcap;
    animatingCoinsRef.current.add(coin.coin_id);
    setTimeout(() => animatingCoinsRef.current.delete(coin.coin_id), 2000);
    return {
      ...coin,
      volume_over_marketcap: payload.new.volume_over_marketcap,
      animation: isNewHigher ? flashGreen : flashRed,
    };
  };

  const deduplicateCoins = coins => Array.from(new Map(coins.map(coin => [coin.coin_id, coin])).values());

  const handleDensityChange = event => setDensity(event.target.checked ? 'standard' : 'compact');

  const getRowClassName = params => {
    const coin = displayedCoins.find(coin => coin.coin_id === params.id);
    if (coin && coin.animation && animatingCoinsRef.current.has(coin.coin_id)) {
      return css`
        animation: ${coin.animation} 1.25s ease-out;
        animation-fill-mode: forwards;
      `;
    }
    return "";
  };

  const renderDataGrid = () => (
    <DataGrid
      rows={displayedCoins}
      columns={VolumeColumns}
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      getRowId={row => row.coin_id}
      density={density}
      getRowClassName={getRowClassName}
    />
  );

  return loading ? (
    <LoadingScreen />
  ) : (
    <Card sx={{ "&:hover": { outline: "1px solid #cccccc", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)" } }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Volume/Marketcap</Typography>}
        action={<FormControlLabel control={<Switch checked={density === 'standard'} onChange={handleDensityChange} />} label="Relaxed View" sx={{ mr: 2 }} />}
        sx={{ "& .MuiCardHeader-title": { fontWeight: "600" } }}
      />
      <Box sx={{ height: 1200, width: "100%" }}>{displayedCoins.length > 0 ? renderDataGrid() : <Typography sx={{ p: 2 }}>No data available</Typography>}</Box>
    </Card>
  );
}

export default VolumeRankingTable;
