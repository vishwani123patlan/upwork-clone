// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14A800', // Customize your primary color
    },
    secondary: {
      main: '#5e6d55', // Customize your secondary color
    },
  },
  button: {
    primary: {
      main: '#14A800', // Customize your primary color
    },
    secondary: {
      main: '#ff9800', // Customize your secondary color
    },
  },
  typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Neue Montreal"'
      ].join(','),// Customize your font
  },
  shape: {
    borderRadius: 8, // Customize border radius
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 990,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
