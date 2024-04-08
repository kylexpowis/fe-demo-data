import React from 'react';
import Lottie from 'react-lottie';
import { Box, Typography, Stack } from '@mui/material';
import scanningAnimation from '../../ScanningAnimation.json'

function NoResults() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: scanningAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Box sx={{ width: '100%', height: '85%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
                <Lottie options={defaultOptions} height={60} width={60} />
            <Typography style={{ textAlign: 'center', marginTop: '10px', fontWeight: '600' }} color='primary'>Monitoring Binance Exchange for new assets...</Typography>
            </Stack>
        </Box>
    );
}

export default NoResults;
