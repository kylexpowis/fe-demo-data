/* eslint-disable no-unused-vars */
import { Button, Typography, Box, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavItem,
    NavLogo,
    NavMenu,
} from "../routes/landing/NavBarElements";

function Navbar() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const navigateToSignIn = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/login-portal');
        }, 3000);
    };

    if (loading) {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 9999,
                    background: 'rgba(255, 255, 255, 1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <LoadingScreen />
            </Box>
        );
    }

    return (
        <Nav>
            <NavBarContainer>
                
                <NavLogo to='/'>
                    <Typography variant={isSmallScreen ? 'h5' : 'h4'} sx={{ fontWeight: '700', color: '#3cc285' }}>
                        Pair<span>Sniper</span>
                    </Typography>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <Button variant='contained' onClick={() => navigateToSignIn()} sx={{ mr: 1 }}>
                            <Typography variant={isSmallScreen ? 'body3' : 'body1'} sx={{ fontWeight: '500' }}>Sign In</Typography>
                        </Button>
                        <ThemeToggle />
                    </NavItem>
                    </NavMenu>
            </NavBarContainer>
        </Nav>
    );
}

export default Navbar;




