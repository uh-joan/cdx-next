import { ThemeOptions } from '@mui/material';

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#00BCD4',
    },
    background: {
      default: '#333',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: 14,
    fontWeightMedium: 500,
    h1: {
      fontSize: 72,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.2,
      fontWeight: 500,
    },
    caption: {
      fontSize: 12,
    },
    button: {
      lineHeight: 2,
      textTransform: 'uppercase',
    },
    overline: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
};
