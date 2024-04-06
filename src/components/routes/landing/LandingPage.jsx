/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from "../../custom/Navbar";
import { Typography, Container, Box } from '@mui/material';

function LandingPage() {
        
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Container maxWidth={false} sx={{ maxWidth: '1440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '200px' }}>
                    <Typography variant='h1' sx={{ mb: 2 }} color='primary'>Cutting Edge Analytics.</Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '1.75rem', fontWeight: '300' }}>Unlock your data's potential</Typography>
                </Box>
            </Container>
        </>
    );
}

export default LandingPage;
