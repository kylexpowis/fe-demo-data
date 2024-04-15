// import React from 'react'
// import { Typography, Box, Button, useMediaQuery } from '@mui/material';
// import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
// import ThemeToggle from './ThemeToggle';
// import Avatar from '@mui/material/Avatar';
// import AvatarMenu from './AvatarMenu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const Header = () => {
//     const isSmallScreen = useMediaQuery('(max-width:600px)');

//     return (
//         <>
//             <Box sx={{ borderBottom: 'white' }} boxShadow={1}>
//                 <Nav>
//                     <NavBarContainer >
//                         <MobileIcon>
//                         </MobileIcon>
//                         <NavLogo to='/'>
//                             <Typography variant={isSmallScreen ? 'h5' : 'h4'} sx={{ fontWeight: '700' }} color='grey'>Pair</Typography>
//                             <Typography variant={isSmallScreen ? 'h5' : 'h4'} sx={{ fontWeight: '700', color: '#3cc285' }}><span>Sniper</span></Typography>
//                         </NavLogo>
//                         <NavMenu style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                             <NavItem>
//                                 <NavLinks to='/rankings/marketcap'><Button  sx={{  fontWeight: '500', padding: '4px 0 0 0' }} variant='ghost'>Marketcap</Button></NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='/rankings/volume'><Button sx={{  fontWeight: '500', padding: '4px 0 0 0' }} variant='ghost'>Volume</Button></NavLinks>
//                             </NavItem>
//                             <AvatarMenu />
//                             <Spacer />
//                             <Avatar sx={{ outline: '1px solid rgba(60, 194, 133, 0.5)', backgroundColor: '#3ecc8b' }}><AccountCircleIcon  /></Avatar>
//                             <Spacer />
//                             <ThemeToggle />
//                         </NavMenu>
//                     </NavBarContainer>
//                 </Nav>
//             </Box>
//         </>
//     )
// }

// export default Header;
// import React, { useState } from 'react';
// import { Typography, Box, Button, IconButton, useMediaQuery } from '@mui/material';
// import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
// import ThemeToggle from './ThemeToggle';
// import Avatar from '@mui/material/Avatar';
// import AvatarMenu from './AvatarMenu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {
//     const isSmallScreen = useMediaQuery('(max-width:600px)');
//     const [openMenu, setOpenMenu] = useState(false);

//     const handleMenuOpen = () => {
//         setOpenMenu(!openMenu);
//     };

//     return (
//         <>
//             <Box sx={{ borderBottom: 'white' }} boxShadow={1}>
//                 <Nav>
//                     <NavBarContainer>
//                         <MobileIcon />
//                         <NavLogo to='/'>
//                             <Typography variant={isSmallScreen ? 'h6' : 'h4'} sx={{ fontWeight: '700', color: 'grey' }}>Pair</Typography>
//                             <Typography variant={isSmallScreen ? 'h6' : 'h4'} sx={{ fontWeight: '700', color: '#3cc285' }}>Sniper</Typography>
//                         </NavLogo>
//                         {isSmallScreen ? (
//                             <IconButton
//                                 color="inherit"
//                                 aria-label="open menu"
//                                 onClick={handleMenuOpen}
//                                 sx={{ ml: 'auto' }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         ) : (
//                             <NavMenu style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
//                                 <NavItem >
//                                     <NavLinks to='/rankings/marketcap'>
//                                         <Button variant='ghost' sx={{ fontWeight: '500', fontSize: isSmallScreen ? '0.8rem' : '1rem', minWidth: '0', whiteSpace: 'nowrap' }}>Marketcap</Button>
//                                     </NavLinks>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLinks to='/rankings/volume'>
//                                         <Button variant='ghost' sx={{ fontWeight: '500', padding: '4px 8px', fontSize: isSmallScreen ? '0.8rem' : '1rem', minWidth: '0', whiteSpace: 'nowrap' }}>Volume</Button>
//                                     </NavLinks>
//                                 </NavItem>
//                                 <NavItem>
//                                     <AvatarMenu />
//                                 </NavItem>
//                                 <NavItem>
//                                     <Avatar sx={{ outline: '1px solid rgba(60, 194, 133, 0.5)', backgroundColor: '#3ecc8b' }}><AccountCircleIcon /></Avatar>
//                                 </NavItem>
//                                 <NavItem>
//                                     <ThemeToggle />
//                                 </NavItem>
//                             </NavMenu>
//                         )}
//                     </NavBarContainer>
//                     {isSmallScreen && openMenu && (
//                         <NavMenu style={{ flexDirection: 'column', alignItems: 'center', padding: '30px', backgroundColor: '#DFE5E0', position: 'absolute', top: '64px', left: 0, right: 0 }}>
//                             <NavItem>
//                                 <NavLinks to='/rankings/marketcap'>
//                                     <Button variant='ghost' sx={{ fontWeight: '500', fontSize: '1rem' }}>Marketcap</Button>
//                                 </NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='/rankings/volume'>
//                                     <Button variant='ghost' sx={{ fontWeight: '500', padding: '8px 16px', fontSize: '1rem' }}>Volume</Button>
//                                 </NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <AvatarMenu />
//                             </NavItem>
                           
//                             <NavItem>
//                                 <ThemeToggle />
//                             </NavItem>
//                         </NavMenu>
//                     )}
//                 </Nav>
//             </Box>
//         </>
//     );
// };

// export default Header;
import React, { useState } from 'react';
import { Typography, Box, Button, IconButton, useMediaQuery } from '@mui/material';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, Spacer } from "../routes/landing/NavBarElements";
import ThemeToggle from './ThemeToggle';
import Avatar from '@mui/material/Avatar';
import AvatarMenu from './AvatarMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
                            <NavMenu style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                                <NavItem>
                                    <NavLinks to='/rankings/marketcap'>
                                        <Button variant='ghost' sx={{ fontWeight: '500', fontSize: isSmallScreen ? '0.8rem' : '1rem', minWidth: '0', whiteSpace: 'nowrap' }}>Marketcap</Button>
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='/rankings/volume'>
                                        <Button variant='ghost' sx={{ fontWeight: '500', padding: '4px 8px', fontSize: isSmallScreen ? '0.8rem' : '1rem', minWidth: '0', whiteSpace: 'nowrap' }}>Volume</Button>
                                    </NavLinks>
                                </NavItem>
                                    <AvatarMenu />
                                    <Avatar sx={{ outline: '1px solid rgba(60, 194, 133, 0.5)', backgroundColor: '#3ecc8b' }}><AccountCircleIcon /></Avatar>
                                <Spacer />
                                    <ThemeToggle />
                                
                            </NavMenu>
                        )}
                    </NavBarContainer>
                    {isSmallScreen && openMenu && (
                        <NavMenu style={{ flexDirection: 'column', alignItems: 'center', padding: '3rem', backgroundColor: '#DFE5E0', position: 'absolute', top: '64px', left: 0, right: 0 }}>
                            <NavItem>
                                <NavLinks to='/rankings/marketcap'>
                                    <Button variant='ghost' sx={{ fontWeight: '500', fontSize: '1rem', marginBottom: '10px' }}>Marketcap</Button>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/rankings/volume'>
                                    <Button variant='ghost' sx={{ fontWeight: '500', padding: '8px 16px', fontSize: '1rem', marginBottom: '10px' }}>Volume</Button>
                                </NavLinks>
                            </NavItem>
                            <div style={{ marginBottom: '10px' }}>
                                <AvatarMenu  />
                                </div>
                                <ThemeToggle  />
                            
                            
                        </NavMenu>
                    )}
                </Nav>
            </Box>
        </>
    );
};

export default Header;


