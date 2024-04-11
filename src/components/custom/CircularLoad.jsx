import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function CircularLoad() {
    return (
            <Box sx={{ width: '100%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', }}>
                    <CircularProgress color="primary" />
            </Box>
    );
}

export default CircularLoad;
