import React from 'react';
import { Container, Grid, Paper, Box } from '@mui/material';
import Header from '@/components/custom/Header';
import { PairsByCoinId } from './PairsByCoinId';
import { CoinSummary } from './CoinSummary';
import VolumeGraph from './VolumeGraph';

const SingleCoinView = () => {
    return (
        <>
            <Header />
            <Container sx={{
                p: 0,
                m: 0,
                width: '100%',
            }} maxWidth disableGutters>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={3} sx={{ borderRight: '1px solid #eff2f5' }}>
                        <Paper sx={{
                            p: 2,
                            height: '91.3vh',
                            overflow: 'auto',
                            borderRadius: 0,
                            border: 'transparent',
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}>
                            <CoinSummary />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={9} sx={{ border: 'transparent' }}>
                        <div style={{
                            height: '91.3vh',
                            overflow: 'auto',
                        }}>
                            <Paper sx={{
                                overflow: 'auto',
                                borderRadius: 0,
                                border: 'transparent',
                                '&::-webkit-scrollbar': { display: 'none' },
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}>
                                <Box sx={{ height: '500px', borderRadius: 0, border: 'transparent' }}>
                                    <VolumeGraph />
                                </Box>
                                <PairsByCoinId />
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SingleCoinView;
