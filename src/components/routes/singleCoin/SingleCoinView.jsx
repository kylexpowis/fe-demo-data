import React from 'react';
import { Container, Grid, Paper, Box, Card } from '@mui/material';
import Header from '@/components/custom/Header';
import { PairsByCoinId } from './PairsByCoinId';
import { CoinSummary } from './CoinSummary';
import VolumeGraph from './VolumeGraph';

const SingleCoinView = () => {
    return (
        <>
            <Header />
            <Container sx={{
                m: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} maxWidth='xlg' >
                <Grid container spacing={4} sx={{ pt: 5, h: '100vh' }}>
                    <Grid item xs={12} lg={3} sx={{ pt: 5, h: '100vh' }}>
                        <Card>
                            <Box sx={{ p: '25px', border: 'transparent' }}>
                                <CoinSummary />
                            </Box>
                        </Card>

                    </Grid>
                    <Grid item xs={12} lg={9} sx={{ border: 'transparent' }}>
                        <Card>
                            <Box sx={{ height: '500px', borderRadius: 0, border: 'transparent' }}>
                                <VolumeGraph />
                            </Box>
                        </Card>
                        <Box sx={{borderRadius: 0, border: 'transparent', pt: '35px' }}>
                            <Card >
                                <PairsByCoinId />
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SingleCoinView;
