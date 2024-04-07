import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';

function AvatarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = React.useState();
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

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
                Display Name
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
                <MenuItem disabled>email@provider.com</MenuItem>
                <MenuItem onClick={() => navigate('/my-account')}>My Account</MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default AvatarMenu;
