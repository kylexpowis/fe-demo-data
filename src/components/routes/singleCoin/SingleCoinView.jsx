import React from 'react';
import { Container, Grid, Paper, Box } from '@mui/material';
import Header from '@/components/custom/Header';
import { PairsByCoinId } from './PairsByCoinId';
import { CoinSummary } from './CoinSummary';

const SingleCoinView = () => {
    return (
        <>
        <Header />
        <Container sx={{
            p: 0,
            m: 0,
            width: '100%',
            maxHeight: '100vh',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',  
        }} maxWidth disableGutters>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={3} sx={{border: '1px solid #eff2f5'}}>
                    <Paper sx={{
                        p: 2,
                        height: '91.3vh',
                        overflow: 'auto',
                        borderRadius: 0,
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}>
                        <CoinSummary />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9} >
                    <div style={{
                        height: '91.3vh',
                        overflow: 'auto',
                        msOverflowStyle: 'none', 
                        scrollbarWidth: 'none', 
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}>
                        <Paper sx={{
                            overflow: 'auto',
                            borderRadius: 0,
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}>
                            <Box sx={{ height: '500px', borderRadius: 0 }}>
                                Line Graph Goes here
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
