import { ThemeOptions } from '@mui/material';

export const brandingThemeOptions = {
  header: {
    background: 'black',
    color: 'white',
  },
  footer: {
    background: 'black',
    color: 'white',
  },
};

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#5E33BF',
    },
    secondary: {
      main: '#16AB03',
    },
    background: {
      default: '#f5f5f5',
    },
    error: {
      main: '#DD2C00',
    },
    warning: {
      main: '#DD2C00',
    },
    info: {
      main: '#0076F5',
    },
    success: {
      main: '#16AB03',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: 16,
    fontWeightMedium: 600,
    h1: {
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.3,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.3,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
    },
    button: {
      lineHeight: 2.25,
      textTransform: 'capitalize',
    },
    overline: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.3,
    },
  },
};
