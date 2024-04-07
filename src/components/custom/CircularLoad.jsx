import React from 'react';
import { Container, Box, CircularProgress, keyframes } from '@mui/material';

const fadeIn = keyframes`
    from {
    opacity: 0;
    } to {
    opacity: 1;
    }
`;

function CircularLoad() {
    return (
        <Container
            maxWidth='lg'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                animation: `${fadeIn} 1s ease-in-out forwards`
            }}
        >
            <Box sx={{ width: '100%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', }}>
                    <CircularProgress color="secondary" />
            </Box>
        </Container>
    );
}

export default CircularLoad;
