import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
import ThemeToggle from './ThemeToggle';
import Avatar from '@mui/material/Avatar';
import AvatarMenu from './AvatarMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    

    return (
        <>
            <Box sx={{ borderBottom: 'white' }} boxShadow={1}>
                <Nav>
                    <NavBarContainer >
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavLogo to='/'>
                            <Typography variant='h2' sx={{ fontWeight: '700', fontSize: '2.5rem' }} color='grey'>Pair</Typography>
                            <Typography sx={{ fontWeight: '700', fontSize: '2.5rem', color: '#3cc285' }}><span>Sniper</span></Typography>
                        </NavLogo>
                        <NavMenu style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <NavItem>
                                <NavLinks to='/rankings/marketcap'><Button sx={{ fontSize: '1rem', fontWeight: '500', padding: '4px 0 0 0' }} variant='ghost'>Marketcap</Button></NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/rankings/volume'><Button sx={{ fontSize: '1rem', fontWeight: '500', padding: '4px 0 0 0' }} variant='ghost'>Volume</Button></NavLinks>
                            </NavItem>
                            <AvatarMenu />
                            <Spacer />
                            <Avatar sx={{ outline: '1px solid rgba(60, 194, 133, 0.5)', backgroundColor: '#3ecc8b' }}><AccountCircleIcon sx={{ width: '60px', height: '60px' }} /></Avatar>
                            <Spacer />
                            <ThemeToggle />
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </Box>
        </>
    )
}

export default Header;
