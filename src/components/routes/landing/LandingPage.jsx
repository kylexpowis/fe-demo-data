/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Button, Typography, Container, Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThemeToggle from '../../custom/ThemeToggle';
import video from "../../../assets/video.mp4";
import {
    Nav,
    NavBarContainer,
    NavItem,
    NavLogo,
    NavMenu,
} from "./NavBarElements";
function LandingPage() {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const navigateToSignIn = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/login-portal');
        }, 3000);
    };
    return (
        <div className="landing" style={{ position: "relative" }}>
            <video
                src={video}
                autoPlay
                muted
                loop
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                }}
            ></video>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    zIndex: -1,
                }}
            ></div>

            <Box sx={{ zIndex: 1, position: 'relative' }}>
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
            </Box>

            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1440px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: "200px",
                    }}
                >
                    <Typography variant={isSmallScreen ? 'h2' : 'h1'} sx={{ mb: 2, fontWeight: 450 }} color="primary">
                        Cutting Edge Analytics.
                    </Typography>
                    <Typography
                        variant={isSmallScreen ? 'h4' : 'h3'}
                        
                    >
                        Unlock your data's potential
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default LandingPage;
