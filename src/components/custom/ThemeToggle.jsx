import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ToggleButton from '@mui/material/ToggleButton';
import { useMediaQuery } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDarkMode = theme === 'dark';
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <ToggleButton
            value="check"
            selected={isDarkMode}
            onChange={toggleTheme}
            sx={{
                background: 'rgba(60, 194, 133, 0.1)',
                border: '1px solid rgba(60, 194, 133, 0.3)',
                transition: 'background 0.3s ease-in-out, border 0.3s ease-in-out',
                borderRadius: '10px',
                '&:hover': {
                    background: 'rgba(60, 194, 133, 0.4)',
                },
                '&.Mui-selected': {
                    background: 'transparent',
                    '&:hover': {
                        background: 'rgba(60, 194, 133, 0.4)',
                    },
                },
                '&:focus::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: '1.5px solid rgba(60, 194, 133, 0.5)',
                    borderRadius: 'inherit',
                },
                padding: 1,
            }}
        >
            {isDarkMode ? <LightModeIcon variant={isSmallScreen ? 'body2' : 'body1'} /> : <DarkModeIcon variant={isSmallScreen ? 'body2' : 'body1'} />}
        </ToggleButton>
    );
};

export default ThemeToggle;
