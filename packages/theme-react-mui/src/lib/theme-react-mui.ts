import { createTheme, Theme } from '@mui/material';

import { brandingThemeOptions, themeOptions } from './theme-option-clarivate';

export const clarivateTheme = createTheme(
  themeOptions,
  brandingThemeOptions,
) as unknown as ThemeOptionsWithBranding;

export interface ThemeOptionsWithBranding extends Theme {
  header: {
    background: string;
    color: string;
  };
  footer: {
    background: string;
    color: string;
  };
}
