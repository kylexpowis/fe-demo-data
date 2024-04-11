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
                alignItems: 'center',
                pb: '30px'
            }} maxWidth='xlg' >
                <Grid container spacing={4} sx={{ pt: 4, h: '100vh' }}>
                    <Grid item xs={12} lg={3} sx={{ h: '100vh' }}>
                        <Card sx={{
                            ":hover": {
                                outline: "1px solid #cccccc",
                                boxShadow:
                                    "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
                            },
                        }}>
                            <Box sx={{ p: '25px', border: 'transparent' }}>
                                <CoinSummary />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={9} sx={{ border: 'transparent' }}>
                        <Card sx={{
                            ":hover": {
                                outline: "1px solid #cccccc",
                                boxShadow:
                                    "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
                            },
                        }}>
                            <Box sx={{ height: '500px', borderRadius: 0, border: 'transparent' }}>
                                <VolumeGraph />
                            </Box>
                        </Card>
                        <Box sx={{ borderRadius: 0, border: 'transparent', pt: '29.25px' }}>
                            <Card sx={{
                                ":hover": {
                                    outline: "1px solid #cccccc",
                                    boxShadow:
                                        "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)",
                                },
                            }}>
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
