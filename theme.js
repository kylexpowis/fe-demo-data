import { createTheme } from '@mui/material/styles';

export const dark = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#3FBF77',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#3FBF77',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        error: {
            main: '#e83333',
        },
        background: {
            default: '#2d2d2d',
            paper: '#0a0a0a',
        },
    },
    typography: {
        fontWeightLight: 400,
        h1: {
            fontWeight: 500,
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h2: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h3: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h4: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h5: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h6: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        subtitle1: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        body1: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        body2: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        button: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        caption: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        overline: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
    },
    spacing: 8,
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
        MuiButton: {
            size: 'small',
        },
        MuiButtonGroup: {
            size: 'small',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiFab: {
            size: 'small',
        },
        MuiFormControl: {
            margin: 'dense',
            size: 'small',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiRadio: {
            size: 'small',
        },
        MuiSwitch: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
            size: 'small',
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
    },
    overrides: {
        MuiSnackbarContent: {
            root: {
                color: '#ffffff',
                backgroundColor: '#0d0d0d',
            },
        },
        MuiTableHead: {
            root: {
                backgroundColor: '#101010',
                color: '#101010',
                cell: '2px',
                '&&': {
                    backgroundColor: '#101010',
                    color: '#0a0a0a',
                },
            },
        },
        MuiButton: {
            root: {
                color: 'white',
                borderRadius: '5px',
                backgroundColor: '#338f64',
                border: '1px solid #3cc285',
                padding: '6px 22px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                textTransform: 'none',
                '&:hover': {
                    transition: 'all 0.2s ease-in-out',
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
                borderColor: '#3cc285',
                backgroundColor: '#37996b',
                '&:hover': {
                    backgroundColor: '#32805c',
                },
            },
            textSecondary: {
                color: '#fff',
                borderColor: 'rgb(30, 76, 56)',
                backgroundColor: 'rgb(51, 143, 100, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgb(51, 143, 100, 0.2)',
                },
            },
            outlinedSecondary: {
                color: '#fff',
                borderColor: 'rgb(30, 76, 56)',
                backgroundColor: 'rgb(51, 143, 100, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgb(51, 143, 100, 0.2)',
                },
            },
            containedSecondary: {
                color: '#fff',
                borderColor: 'rgb(30, 76, 56)',
                backgroundColor: 'rgb(51, 143, 100, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgb(51, 143, 100, 0.2)',
                },
            },
            disabled: {
                backgroundColor: '#474747',
                color: '#8d8d8d',
                borderColor: '5d5d5d',
                '& .MuiButton-startIcon, & .MuiButton-endIcon': {
                    color: 'rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiIconButton: {
            root: {
                color: '#fff',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
            },
        },
        MuiChip: {
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
                    color: 'white',
                },
            },
            deletable: {
                '&:focus': {
                    backgroundColor: '#cfcfcf',
                    color: 'white',
                },
            },
            colorPrimary: {
                backgroundColor: '#3FBF77',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#36ac6d',
                },
            },
            colorSecondary: {
                backgroundColor: '#37996b',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#32805c',
                },
            },
            outlined: {
                backgroundColor: 'transparent',
                color: '#0a0a0a',
                borderColor: '#3ecf8e',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                },
                '&:focus': {
                    backgroundColor: '#e0e0e0',
                },
            },
        },
        MuiTable: {
            root: {
                backgroundColor: '#ffffff',
            },
        },
        MuiTableCell: {
            root: {
                backgroundColor: '#0d0d0d',
                padding: '6px 10px',
                color: '#0a0a0a',
            },
            head: {
                fontWeight: 'bold',
            },
        },
        MuiTableRow: {
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: '#f9f9f9',
                },
                '&:hover': {
                    backgroundColor: '#efefef',
                },
            },
        },
        MuiPaper: {
            root: {
                '&[role="menu"]': {
                    backgroundColor: '#333',
                    color: '#fff',
                    border: '1px solid #444',
                },
            },
        },
        MuiMenu: {
            paper: {
                backgroundColor: '#333',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            },
        },
        MuiMenuItem: {
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
        MuiSelect: {
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
        MuiInput: {
            root: {
                color: '#747474',
                '&:hover': {
                    transition: 'all 0.2s ease-in-out',
                    color: '#fff',
                },
            },
            underline: {
                transition: 'all 0.2s ease-in-out',
                '&:before': {
                    borderBottom: '1px solid #3fbf77',
                },
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid #3fbf77',
                },
                '&:after': {
                    borderBottom: '2px solid #3FBF77',
                },
            },
        },
        MuiCard: {
            root: {
                background: '#0e0e0e',
                color: '#ffffff',
                outline: '1px solid rgba(62, 207, 142, 0.25)',
                boxShadow:
                    '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.2s ease-in-out',
                '&:hover': {
                    boxShadow:
                        '0px 10px 15px rgba(0, 0, 0, 0.18), 0px 4px 20px rgba(0, 0, 0, 0.15)',
                },
                borderRadius: '10px',
                overflow: 'hidden',
            },
        },
        MuiListItem: {
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
    shape: {
        borderRadius: 4,
    },
});


export const light = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3FBF77',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#3FBF77',
        },
        background: {
            paper: '#0a0a0a',
        },
        error: {
            main: '#e83333',
        },
    },
    typography: {
        fontWeightLight: 400,
        h1: {
            fontWeight: 500,
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h2: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h3: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h4: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h5: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        h6: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        subtitle1: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        body1: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        body2: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        button: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        caption: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        overline: {
            fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
        },
        fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
    },
    spacing: 8,
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
        MuiButton: {
            size: 'small',
        },
        MuiButtonGroup: {
            size: 'small',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiFab: {
            size: 'small',
        },
        MuiFormControl: {
            margin: 'dense',
            size: 'small',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiRadio: {
            size: 'small',
        },
        MuiSwitch: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
            size: 'small',
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
    },
    overrides: {
        MuiTableHead: {
            root: {
                backgroundColor: '#ffffff',
                color: '#0a0a0a',
                '&&': {
                    backgroundColor: '#ffffff',
                    color: '#0a0a0a',
                },
            },
        },
        MuiButton: {
            root: {
                color: 'white',
                borderRadius: '5px',
                backgroundColor: '#338f64',
                border: '1px solid #3cc285',
                padding: 'px 22px',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                textTransform: 'none',
                '&:hover': {
                    transition: 'all 0.2s ease-in-out',
                    backgroundColor: '#32805c',
                    color: '#fff',
                },
            },
            text: {
                color: '#fff',
            },
            secondary: {
                color: '#ffffff',
                border: '1px solid #3cc285',
            },
        },
        MuiIconButton: {
            root: {
                color: 'white',
                border: '1px solid #3cc285',
            },
        },
        MuiChip: {
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
                    color: 'white',
                },
            },
            deletable: {
                '&:focus': {
                    backgroundColor: '#cfcfcf',
                    color: 'white',
                },
            },
            colorPrimary: {
                backgroundColor: '#3FBF77',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#36ac6d',
                },
            },
            colorSecondary: {
                backgroundColor: '#37996b',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#32805c',
                },
            },
            outlined: {
                backgroundColor: 'transparent',
                color: '#0a0a0a',
                borderColor: '#3ecf8e',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                },
                '&:focus': {
                    backgroundColor: '#e0e0e0',
                },
            },
        },
        MuiTable: {
            root: {
                backgroundColor: '#ffffff',
            },
        },
        MuiTableCell: {
            root: {
                padding: '6px 10px',
                color: '#0a0a0a',
            },
            head: {
                fontWeight: 'bold',
            },
        },
        MuiTableRow: {
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: '#f9f9f9',
                },
                '&:hover': {
                    backgroundColor: '#efefef',
                },
            },
        },
        MuiCard: {
            root: {
                background: '#ffffff',
                color: '#0a0a0a',
                outline: '1px solid rgba(62, 207, 142, 0.25)',
                boxShadow:
                    '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.2s ease-in-out',
                '&:hover': {
                    boxShadow:
                        '0px 10px 15px rgba(0, 0, 0, 0.18), 0px 4px 20px rgba(0, 0, 0, 0.15)',
                },
                borderRadius: '10px',
                overflow: 'hidden',
            },
        },
        MuiListItem: {
            root: {
                '&:hover': {
                    backgroundColor: '#f5f5f5',
                },
            },
            button: {
                '&:hover': {
                    backgroundColor: '#eeeeee',
                },
            },
        },
    },
    shape: {
        borderRadius: 4,
    },
});
