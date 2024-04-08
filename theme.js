import { createTheme } from '@mui/material/styles';


export const dark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3FBF77',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#36AB6D',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        error: {
            main: '#e83333',
        },
        background: {
            default: '#0a0a0a',
            paper: '#121212',
        },
        text: {
            main: '#d6d6d6',
            secondary: '#E0E0E0',
        },
    },
    typography: {
        fontFamily: '"Plus Jakarta Sans" ,"Figtree", "Helvetica", "Arial", sans-serif',
        fontWeightLight: 300,
        h1: {
            fontSize: '5rem',
            fontWeight: 400,
            letterSpacing: -1,
        },
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        subtitle1: {},
        body1: {},
        body2: {},
        button: {},
        caption: {},
        overline: {},
    },
    transitions: 'all 0.2s ease-in-out',
    components: {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    backgroundColor: '#0d0d0d',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#101010',
                    color: '#101010',
                    '& .MuiTableCell-root': {
                        color: '#0a0a0a',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderRadius: '0.375rem',
                    backgroundColor: '#338f64',
                    border: '1px solid #3cc285',
                    padding: '2px 10px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    transition: 'all 0.2s ease-in-out',
                    textDecoration: 'none',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#32805c',
                        color: '#fff',
                    },
                },
                textPrimary: {
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
                outlinedPrimary: {
                    color: '#fff',
                    borderColor: '#3cc285',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
                containedPrimary: {
                    color: '#fff',
                    backgroundColor: '#37996b',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: '#32805c',
                    },
                },
                textSecondary: {
                    color: '#fff',
                    backgroundColor: 'rgb(51, 143, 100, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                outlinedSecondary: {
                    color: '#fff',
                    borderColor: 'rgb(30, 76, 56)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                containedSecondary: {
                    color: '#fff',
                    backgroundColor: 'rgb(51, 143, 100, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                ghost: {
                    color: '#33a973',
                    backgroundColor: 'transparent',
                    fontWeight: '400',
                    border: 'transparent',
                    '&:hover': {
                        color: '#4effae',
                        backgroundColor: 'transparent'
                    },
                }
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    backgroundColor: '#37996b',
                    outline: '1px solid #3ecf8e',
                    color: 'white',
                    borderRadius: '5px',
                    '&:focus': {
                        backgroundColor: '#cfcfcf',
                    },
                },
                clickable: {
                    '&:hover': {
                        backgroundColor: '#d5d5d5',
                    },
                },
                deletable: {
                    '&:focus': {
                        backgroundColor: '#cfcfcf',
                    },
                },
                colorPrimary: {
                    backgroundColor: '#3FBF77',
                    '&:hover': {
                        backgroundColor: '#36ac6d',
                    },
                },
                colorSecondary: {
                    backgroundColor: '#37996b',
                    '&:hover': {
                        backgroundColor: '#32805c',
                    },
                },
                outlined: {
                    backgroundColor: 'transparent',
                    borderColor: '#3ecf8e',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                    '&:focus': {
                        backgroundColor: '#e0e0e0',
                    },
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    borderColor: '#333333',
                    color: '#E0E0E0',
                },
                columnHeaders: {
                    backgroundColor: '#121212',
                    color: '#36AB6D',
                    fontWeight: 'bold',
                    borderTop: '1px solid #2a2a2a', 
                    borderBottom: '2px solid #333333', 
                },
                row: {
                    '&:hover': {
                        backgroundColor: '#1a1a1a',
                    },
                },
                cell: {
                    borderBottomColor: '#2a2a2a',
                    '&:focus': {
                        outline: '2px solid #36AB6D', 
                    },
                },
                columnHeader: {
                    '&:hover': {
                        color: '#3FBF77', 
                    },
                },
                sortIcon: {
                    color: '#36AB6D', 
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0d0d0d',
                    padding: '6px 10px',
                    color: '#0a0a0a',
                },
                head: {
                    fontWeight: 'bold',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#f9f9f9',
                    },
                    '&:hover': {
                        backgroundColor: '#efefef',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    '&[role="menu"]': {
                        backgroundColor: '#333',
                        color: '#fff',
                        border: '1px solid #444',
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#333',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#444',
                        color: '#fff',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#555',
                        '&:hover': {
                            backgroundColor: '#444',
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: 'none',
                    color: '#fff',
                    '&:focus': {
                        borderColor: '#80bdff',
                    },
                },
                icon: {
                    color: '#0a0a0a',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: '#747474',
                    '&:hover': {
                        color: '#fff',
                    },
                    '&.Mui-focused input': {
                        color: '#ffffff',
                    },
                },
                underline: {
                    '&:before': {
                        borderBottom: '1px solid #d6d6d6',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: '2px solid #d6d6d6',

                    },
                    '&:after': {
                        color: '#ffffff',
                        borderBottom: '2px solid #3FBF77',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#111111',
                    color: '#ffffff',
                    outline: '1px solid #343434',
                    transition: 'all 0.2s ease-in-out',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.18), 0px 4px 20px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.2s ease-in-out',
                        outline: '1px solid rgba(62, 207, 142, 0.3)',
                    },
                    borderRadius: '10px',
                    overflow: 'hidden',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#0e0e0e',
                    },
                },
                button: {
                    '&:hover': {
                        backgroundColor: '#0e0e0e',
                    },
                },
            },
        },
    },
});

export const light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3FBF77',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#34A853',
        },
        error: {
            main: '#D32F2F',
        },
        background: {
            default: '#f1f1f1',
            paper: '#FFFFFF',
        },
        text: {
            main: '#333333',
        },
    },
    typography: {
        fontFamily: '"Plus Jakarta Sans", "Figtree", "Helvetica", "Arial", sans-serif',
        fontWeightLight: 300,
        h1: {
            fontSize: '5rem',
            fontWeight: 400,
            letterSpacing: -1,
        },
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        subtitle1: {},
        body1: {},
        body2: {},
        button: {},
        caption: {},
        overline: {},
    },
    components: {
        transition: 'all 0.2s ease-in-out',
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderRadius: '0.375rem',
                    backgroundColor: '#338f64',
                    border: '1px solid #3cc285',
                    padding: '2px 10px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    transition: 'all 0.2s ease-in-out',
                    textDecoration: 'none',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#32805c',
                        color: '#fff',
                    },
                },
                textPrimary: {
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
                outlinedPrimary: {
                    color: '#fff',
                    borderColor: '#3cc285',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
                containedPrimary: {
                    color: '#fff',
                    backgroundColor: '#37996b',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: '#32805c',
                    },
                },
                textSecondary: {
                    color: '#fff',
                    backgroundColor: 'rgb(51, 143, 100, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                outlinedSecondary: {
                    color: '#fff',
                    borderColor: 'rgb(30, 76, 56)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                containedSecondary: {
                    color: '#fff',
                    backgroundColor: 'rgb(51, 143, 100, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgb(51, 143, 100, 0.2)',
                    },
                },
                ghost: {
                    color: '#3cc285',
                    fontWeight: '400',
                    backgroundColor: 'transparent',
                    border: 'transparent',
                    '&:hover': {
                        color: '#33a973',
                        backgroundColor: 'transparent',
                    },
                }
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
            },
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    backgroundColor: '#e0e0e0',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#e0e0e0',
                    color: '#000000',
                    '& .MuiTableCell-root': {
                        color: '#000000',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    backgroundColor: '#37996b',
                    outline: '1px solid #3ecf8e',
                    color: 'white',
                    borderRadius: '5px',
                    '&:focus': {
                        backgroundColor: '#e0f0e0',
                    },
                },
                clickable: {
                    '&:hover': {
                        backgroundColor: '#d0e0d0',
                    },
                },
                deletable: {
                    '&:focus': {
                        backgroundColor: '#e0f0e0',
                    },
                },
                colorPrimary: {
                    '&:hover': {
                        backgroundColor: '#36ac6d',
                    },
                },
                colorSecondary: {
                    '&:hover': {
                        backgroundColor: '#32805c',
                    },
                },
                outlined: {
                    backgroundColor: 'transparent',
                    borderColor: '#3ecf8e',
                    '&:hover': {
                        backgroundColor: '#fafafa',
                    },
                    '&:focus': {
                        backgroundColor: '#f0f0f0',
                    },
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    borderColor: '#e0e0e0',
                    color: '#333333',
                },
                columnHeaders: {
                    backgroundColor: '#f1f1f1',
                    color: '#3FBF77',
                    fontWeight: 'bold',
                    borderTop: '1px solid #e0e0e0',
                    borderBottom: '2px solid #e0e0e0',
                },
                row: {
                    '&:hover': {
                        backgroundColor: '#f9f9f9',
                    },
                },
                cell: {
                    borderBottomColor: '#e0e0e0',
                    '&:focus': {
                        outline: '2px solid #3FBF77',
                    },
                },
                columnHeader: {
                    '&:hover': {
                        color: '#34A853',
                    },
                },
                sortIcon: {
                    color: '#3FBF77',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    padding: '6px 10px',
                    color: '#000000',
                },
                head: {
                    fontWeight: 'bold',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#f7f7f7',
                    },
                    '&:hover': {
                        backgroundColor: '#efefef',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    '&[role="menu"]': {
                        backgroundColor: '#f9f9f9',
                        color: '#000000',
                        border: '1px solid #ddd',
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#f9f9f9',
                    color: '#000000',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                        color: '#000000',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#dedede',
                        '&:hover': {
                            backgroundColor: '#d0d0d0',
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: 'none',
                    color: '#000000',
                    '&:focus': {
                        borderColor: '#80bdff',
                    },
                },
                icon: {
                    color: '#000000',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    '&:hover': {
                        color: '#000000',
                    },
                    '&.Mui-focused input': {
                        color: '#0a0a0a',
                    },
                },
                underline: {
                    '&:before': {
                        borderBottom: '1px solid #3fbf77',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: '2px solid #3fbf77',
                    },
                    '&:after': {
                        color: '#ffffff',
                        borderBottom: '2px solid #3FBF77',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#ffffff',
                    color: '#000000',
                    outline: '1px solid #cccccc',
                    transition: 'all 0.2s ease-in-out',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.18), 0px 4px 20px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.2s ease-in-out',
                        outline: '1px solid rgba(62, 207, 142, 0.1)',
                    },
                    borderRadius: '10px',
                    overflow: 'hidden',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                },
                button: {
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                },
            },
        },
    },
});
