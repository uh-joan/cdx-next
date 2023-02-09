import { createTheme } from '@mui/material';

import { clarivateThemeOptions } from './theme-option-clarivate';
import { darkThemeOptions } from './theme-option-dark';
import { ipmsThemeOptions } from './theme-option-ipms';
import { jungleThemeOptions } from './theme-option-jungle';

export const clarivateTheme = createTheme(clarivateThemeOptions);
export const darkThemeSample = createTheme(darkThemeOptions);
export const jungleThemeSample = createTheme(jungleThemeOptions);
export const IpmsTheme = createTheme(ipmsThemeOptions);
