/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
import ThemeToggle from './ThemeToggle';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';

function Navbar() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/login-portal');
        }, 1000);
    };    

    if (loading) {
        return (
            <LoadingScreen />
        )
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
