import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, Label } from 'recharts';
import { Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import _ from 'lodash';
import { getVolumeData } from '../../../../config/api';
import moment from 'moment/moment';
import CircularLoad from '@/components/custom/CircularLoad';

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
                        volumeOverMarketCap: parseFloat(item.avg_volume_over_marketcap).toFixed(2),
                        timestamp: new Date(item.rounded_timestamp).toISOString(), // Convert epoch to ISO 8601
                    }));
                    console.log(formattedData);
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

    const maxYValue = useMemo(() => {
        const maxVolume = Math.max(...volume.map(item => parseFloat(item.volumeOverMarketCap)), 0);
        return Math.ceil(maxVolume) + 1;
    }, [volume]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const date = moment(payload[0].payload.timestamp).format("DD/MM/YY");
            const time = moment(payload[0].payload.timestamp).format("h:mm A");
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        padding: '10px',
                        border: '1px solid teal',
                        backgroundColor: 'rgba(121, 168, 139, 0.25)',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.85em',
                        marginBottom: '5px',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem' }}><CalendarMonthIcon style={{ marginRight: '1px' }} /> {date}</div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem' }}><QueryBuilderIcon style={{ marginRight: '1px' }} /> {time}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.75em',
                        marginBottom: '5px'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.8rem', marginRight: '5px' }}><ShowChartIcon /><strong>Vol/MCap:</strong> </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.8rem', marginRight: '5px' }}><strong> {payload[0].value}%</strong></div>
                    </div>
                </div>
            );
        }
        return null;
    };

    

    if (loading) {
        return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularLoad /></div>;
    }

    return (
        <Box sx={{ width: '100%', height: '500px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={formattedVolume} margin={{ top: 10, right: 10, left: 5, bottom: 10 }}>
                    <defs>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="timestamp" tick={{ fontSize: 10 }}>
                        <Label value="Date" offset={-10} position="insideBottom" />
                    </XAxis>
                    <YAxis tick={{ fontSize: 10 }} domain={[0, maxYValue]}>
                        <Label value="Volume/Market Cap" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
                    </YAxis>
                    <Tooltip
                        content={<CustomTooltip/>}
                    />
                    <Area type="monotone" dataKey="volumeOverMarketCap" stroke="#82ca9d" fillOpacity={1} fill="url(#colorVolume)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
}