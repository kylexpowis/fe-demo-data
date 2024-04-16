import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, useMediaQuery } from '@mui/material'
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';
import { useSupabaseAuth } from '../context/AuthContext';

function AvatarMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState();
    const [tempName, setTempName] = useState(`User${Math.floor(Math.random() * 100000)}`);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:600px)');


    const { userDetails } = useSupabaseAuth()
    const { name, email } = userDetails;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function signOut() {
        setLoading(false)
        const { data, error } = await supabase.auth.signOut()

        if (error) {
            console.error('Error signing out user', error);
        } else {
            setTimeout(() => {
                setLoading(false)
                console.log('Successfully signed out user', data);
            }, 1000);
        }
    }

    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <Box sx={{ display: 'inline-flex', height: '100%', alignItems: 'center' }}>
            <Button
                id="avatar-button"
                aria-controls={open ? 'avatar-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
                variant='ghost'
                sx={{ fontSize: isSmallScreen ? '2rem' : '1rem', fontWeight: '700', margin: 0, height: 0, color: 'secondary', padding: isSmallScreen ? '3rem' : '0' }}
            >
                {name || tempName}
            </Button>
            <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'avatar-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center', 
                }}
                transformOrigin={{
                    vertical: 'top', 
                    horizontal: 'center', 
                }}
                sx={{
                    marginTop: '1.25rem',
                    opacity: '0.9'
                }}
            >
                <MenuItem disabled>{email}</MenuItem>
                <MenuItem onClick={() => navigate('/my-account')}>My Account</MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}

export default AvatarMenu;
