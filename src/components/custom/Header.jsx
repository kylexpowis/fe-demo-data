
import React, { useState } from 'react';
import { Typography, Box, IconButton, useMediaQuery, List, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu } from "../routes/landing/NavBarElements";
import ThemeToggle from './ThemeToggle';
import AvatarMenu from './AvatarMenu';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <Box sx={{ borderBottom: 'white' }} boxShadow={1}>
                <Nav>
                    <NavBarContainer>
                        <MobileIcon />
                        <NavLogo to='/'>
                            <Typography variant={isSmallScreen ? 'h6' : 'h4'} sx={{ fontWeight: '700', color: 'grey' }}>Pair</Typography>
                            <Typography variant={isSmallScreen ? 'h6' : 'h4'} sx={{ fontWeight: '700', color: '#3cc285' }}>Sniper</Typography>
                        </NavLogo>
                        {isSmallScreen ? (
                            <IconButton
                                color="inherit"
                                aria-label="open menu"
                                onClick={handleMenuOpen}
                                sx={{ ml: 'auto', fontSize: '1.5rem' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <NavMenu style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'nowrap', height: '100%', padding: '0', justifyContent: 'flex-end', gap: '1.5rem' }}>
                                <NavItem>
                                    <NavLinks to='/rankings/marketcap' activeClassName="active">
                                        Marketcap
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='/rankings/volume' activeClassName="active">
                                        Volume
                                    </NavLinks>
                                </NavItem>
                                <Divider orientation='vertical' variant='middle' flexItem sx={{ height: '50%', alignSelf: 'center' }} color="#313131" />
                                <AvatarMenu />
                                <ThemeToggle />
                            </NavMenu>
                        )}
                    </NavBarContainer>
                    {isSmallScreen && openMenu && (
                        <NavMenu style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '1rem',
                            backgroundColor: '#4d4d4d',
                            position: 'absolute',
                            top: '4rem',
                            left: 0,
                            right: 0,
                            opacity: 0.95
                        }}>
                            <div>
                                <AvatarMenu />
                            </div>
                            <NavItem>
                                <NavLinks to='/rankings/marketcap'>
                                    <p style={{ fontSize: '1.75rem' }}>Marketcap</p>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/rankings/volume'>
                                    <p style={{ fontSize: '2rem' }}>Volume</p>
                                </NavLinks>
                            </NavItem>
                            <ThemeToggle />
                        </NavMenu>
                    )}
                </Nav>
            </Box>
        </>
    );
};

export default Header;


