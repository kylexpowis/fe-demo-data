/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
import ThemeToggle from './ThemeToggle';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
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
                        <Button variant='contained' onClick={() => navigate('/login')}><Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Sign In</Typography></Button>
                        <Spacer />
                        <ThemeToggle />
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
