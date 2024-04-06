import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ToggleButton from '@mui/material/ToggleButton';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDarkMode = theme === 'dark';

    return (
        <ToggleButton
            value="check"
            selected={isDarkMode}
            onChange={toggleTheme}
            sx={{
                background: 'none',
                border: 'none',
                '&:hover': {
                    background: 'none',
                },
                '&.Mui-selected': {
                    background: 'none',
                    '&:hover': {
                        background: 'none',
                    },
                },
                '&:focus': {
                    outline: 'none',
                },
                padding: 0, 
            }}
        >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ToggleButton>
    );
};

export default ThemeToggle;
