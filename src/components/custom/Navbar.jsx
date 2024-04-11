/* eslint-disable no-unused-vars */
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavItem,
    NavLogo,
    NavMenu,
    Spacer
} from "../routes/landing/NavBarElements";

function Navbar() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
        <>
            <Nav>
                <NavBarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavLogo to='/'><Typography variant='h2' sx={{ fontWeight: '700', fontSize: '2.5rem', color: '#3cc285' }}>Pair<span>Sniper</span></Typography></NavLogo>
                    <NavMenu>
                        <NavItem>
                        </NavItem>
                        <Button variant='contained' onClick={() => navigateToSignIn()}><Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Sign In</Typography></Button>
                        <Spacer />
                        <ThemeToggle />
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
