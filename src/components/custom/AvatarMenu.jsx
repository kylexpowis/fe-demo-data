import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, MenuList, useMediaQuery, Divider, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';
import { useSupabaseAuth } from '../context/AuthContext';
import moment from 'moment/moment';

function AvatarMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState();
    const open = Boolean(anchorEl);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();


    const { userDetails } = useSupabaseAuth()
    const { name, email, joined } = userDetails;

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
                sx={{ fontSize: isSmallScreen ? '1.5rem' : '1rem', fontWeight: '600', margin: 0, height: 0, color: 'secondary', padding: isSmallScreen ? '1rem' : '0' }}
            >
                Account
            </Button>
            <Menu dense
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
                    marginTop: '1.5rem',
                    opacity: '0.95',
                }}

            >
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', JustifyContent: 'center' }}>
                    <Typography variant="subtitle1" color="textPrimary" sx={{ fontWeight: 'bold', justifySelf: 'left', fontSize: '1.25rem', margin: '0', padding: 0 }}>
                        {name || 'No Name Set'}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary" sx={{ fontWeight: '400', justifySelf: 'left', fontSize: '1rem' }}>
                        {email}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary" sx={{ fontWeight: '500', justifySelf: 'left', fontSize: '0.75rem' }}>
                        User Since: {moment(joined).format("DD/MM/YYYY")}
                    </Typography>
                </Box>
                <MenuList dense="true">
                    <Divider sx={{ paddingTop: '0' }} />
                    <MenuItem onClick={() => navigate("/my-account")} sx={{ marginTop: '5px' }}><PersonIcon sx={{ marginRight: '5px', justifySelf: 'left' }} />Profile</MenuItem>
                    <Divider />
                    <MenuItem onClick={signOut}><LogoutIcon sx={{ marginRight: '5px', justifySelf: 'left' }} />Logout</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}><HelpIcon sx={{ marginRight: '5px', justifySelf: 'left' }} />Help</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default AvatarMenu;
