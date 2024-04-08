import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { Box } from '@mui/material';
import _ from 'lodash';
import { getVolumeData } from '../../../../config/api';
import moment from 'moment/moment';

export default function VolumeGraph() {
    const [volume, setVolume] = useState([]);
    const [loading, setLoading] = useState(false);
    const { coin_id } = useParams();

    const fetchVolumeData = useCallback(() => {
        setLoading(true);
        _.debounce((coinId) => {
            getVolumeData(coinId)
                .then((data) => {
                    const formattedData = data.map(item => ({
                        volumeOverMarketCap: parseFloat(item.volume_over_marketcap).toFixed(2),
                        timestamp: new Date(item.timestamp).toLocaleString(),
                    }));
                    setVolume(formattedData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log('Error fetching volume data', error);
                    setLoading(false);
                });
        }, 500)(coin_id);
    }, [coin_id]);

    useEffect(() => {
        fetchVolumeData();
    }, [fetchVolumeData]);

    const formattedVolume = useMemo(() => volume, [volume]);

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const date = moment(payload[0].payload.timestamp, "MM/DD/YYYY, h:mm:ss A").format("MMM DD, YYYY");
        const time = moment(payload[0].payload.timestamp, "MM/DD/YYYY, h:mm:ss A").format("h:mm:ss A");
        return (
            <div className="custom-tooltip" style={{ padding: '10px', border: '1px solid teal', backgroundColor: 'rgba(121, 168, 139, 0.25)', borderRadius: '10px' }}>
                <div><strong>Date:</strong> {date}</div>
                <div><strong>Time:</strong> {time}</div>
                <div><strong>Volume/MarketCap:</strong> {payload[0].value}</div>
            </div>
        );
    }
    return null;
};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{width: '100%', height: '500px'}}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={formattedVolume} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <CartesianGrid strokeDasharray="1 0" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="volumeOverMarketCap" stroke="#82ca9d" fillOpacity={1} fill="url(#colorVolume)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
}
