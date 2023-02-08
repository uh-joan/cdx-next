import { ThemeOptions } from '@mui/material';

export const brandingJungleThemeOptions = {
  header: {
    background: '#172b0c',
    color: '#00C851',
  },
  footer: {
    background: '#172b0c',
    color: '#00C851',
  },
};

export const jungleThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#800020',
    },
    secondary: {
      main: '#D35400',
    },
    background: {
      default: '#F5FFF2',
      paper: '#8DDC93',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FDB813',
    },
    info: {
      main: '#0077C9',
    },
    success: {
      main: '#00C851',
    },
  },
  typography: {
    fontFamily: '"Times New Roman", Times, serif;',
    fontSize: 18,
    fontWeightMedium: 800,
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
