import { createTheme, Theme } from '@mui/material';

import { brandingThemeOptions, themeOptions } from './theme-option-clarivate';
import { darkThemeOptions } from './theme-option-dark';
import { ipmsThemeOptions } from './theme-option-ipms';
import {
  brandingJungleThemeOptions,
  jungleThemeOptions,
} from './theme-option-jungle';

export const clarivateTheme = createTheme(
  themeOptions,
  brandingThemeOptions,
) as unknown as ThemeOptionsWithBranding;

export const darkThemeSample = createTheme(darkThemeOptions);
export const IpmsTheme = createTheme(ipmsThemeOptions);

export const jungleThemeSample = createTheme(
  jungleThemeOptions,
  brandingJungleThemeOptions,
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
