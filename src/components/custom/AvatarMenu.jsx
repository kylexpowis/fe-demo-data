import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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


    const { userDetails } = useSupabaseAuth()
    const { name, email } = userDetails;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function signOut() {
        setLoading(true)
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
        <div>
            <Button
                id="avatar-button"
                aria-controls={open ? 'avatar-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
                variant='ghost'
                sx={{ fontSize: '1rem', fontWeight: '500' }}
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
            >
                <MenuItem disabled>{email}</MenuItem>
                <MenuItem onClick={() => navigate('/my-account')}>My Account</MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default AvatarMenu;
