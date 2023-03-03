import { createTheme, Theme } from '@mui/material';

import {
  brandingAcademiaAndGovernamentThemeOptions,
  businessUnit1EThemeOptions,
  businessUnit2EThemeOptions,
  ipmsThemeOptions,
} from './theme-option-academia';
import { brandingThemeOptions, themeOptions } from './theme-option-clarivate';
import {
  brandingBusinessUnit1FThemeOptions,
  brandingBusinessUnit2FThemeOptions,
  brandingIntellectualPropertiesThemeOptions,
  businessUnit1FThemeOptions,
  businessUnit2FThemeOptions,
  intellectualPropertyOptions,
} from './theme-option-intellectual-property';
import {
  brandingJungleThemeOptions,
  jungleThemeOptions,
} from './theme-option-jungle';
import {
  brandinglifeScienceThemeOptions,
  brandingproductNameCOptions,
  brandingWorkingGroupOptions,
  lifeScienceThemeOptions,
  productNameCOptions,
  WorkingGroupTHemeOptions,
} from './theme-option-life-science';

export const clarivateTheme = createTheme(
  themeOptions,
  brandingThemeOptions,
) as unknown as ThemeOptionsWithBranding;

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

export const liifeScienceTheme = createTheme(
  lifeScienceThemeOptions,
  brandinglifeScienceThemeOptions,
);

export const workingGroupThemeSample = createTheme(
  WorkingGroupTHemeOptions,
  brandingWorkingGroupOptions,
);

export const productNameCTheme = createTheme(
  productNameCOptions,
  brandingproductNameCOptions,
);

export const IpmsTheme = createTheme(
  ipmsThemeOptions,
  brandingAcademiaAndGovernamentThemeOptions,
);

export const businessUnit1ETheme = createTheme(
  businessUnit1EThemeOptions,
  brandingAcademiaAndGovernamentThemeOptions,
);

export const businessUnit2ETheme = createTheme(
  businessUnit2EThemeOptions,
  brandingAcademiaAndGovernamentThemeOptions,
);

export const IntellectualPropertyTheme = createTheme(
  intellectualPropertyOptions,
  brandingIntellectualPropertiesThemeOptions,
);

export const businessUnit1FTheme = createTheme(
  businessUnit1FThemeOptions,
  brandingBusinessUnit1FThemeOptions,
);

export const businessUnit2FTheme = createTheme(
  businessUnit2FThemeOptions,
  brandingBusinessUnit2FThemeOptions,
);
