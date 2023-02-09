import { ThemeOptions } from '@mui/material';

export const ipmsThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#00a09b',
    },
    secondary: {
      main: '#636c72',
    },
    background: {
      default: '#f8f9fa',
    },
    error: {
      main: '#d63230',
    },
    warning: {
      main: '#ffbc42',
    },
    info: {
      main: '#32a0cb',
    },
    success: {
      main: '#5cb85c',
    },
  },
  typography: {
    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    fontSize: 16,
    fontWeightMedium: 400,
    h1: {
      fontSize: 40,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.2,
      fontWeight: 400,
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
      lineHeight: 1.2,
    },
  },
};
