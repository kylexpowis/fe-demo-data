import React from 'react';
import { Container, Box, Stack, LinearProgress, keyframes } from '@mui/material';

const fadeIn = keyframes`
    from {
    opacity: 0;
    } to {
    opacity: 1;
    }
`;

function LoadingScreen() {
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
            <Box sx={{ width: '100%' }}>
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="secondary" />
                </Stack>
            </Box>
        </Container>
    );
}

export default LoadingScreen;
