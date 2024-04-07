import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { light, dark } from '../../../theme';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    const [theme, setTheme] = useState(
        localStorage.getItem('appTheme') || (prefersDarkMode ? 'dark' : 'light')
    );

    useEffect(() => {
        const storedTheme = localStorage.getItem('appTheme');
        if (!storedTheme) {
            setTheme(prefersDarkMode ? 'dark' : 'light');
        }
    }, [prefersDarkMode]);

    useEffect(() => {
        localStorage.setItem('appTheme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    const themeMode = theme === 'light' ? light : dark;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={themeMode}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
