import { EnvironmentProviders, provideEnvironmentInitializer } from '@angular/core';
import {
  AllCommunityModule,
  ColDef,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';

/**
 * The Helix AG Grid setup, in one place. In an app this file would live in
 * `@cdx/theme-ag-grid` and you would import from there; it is colocated with the
 * pattern until it ships from the package (status: beta).
 *
 * - `provideHelixAgGrid()` registers the AG Grid modules once, at app bootstrap,
 *   so no feature repeats `ModuleRegistry.registerModules(...)`. Pass the
 *   Enterprise modules and the license here too if you use them.
 * - `helixGridTheme` is a Theming API theme (AG Grid v36+) built from the Helix
 *   `--hlx-*` custom properties, so the grid follows the app theme.
 * - `HELIX_DEFAULT_COL_DEF` is the shared column default.
 */
export function provideHelixAgGrid(): EnvironmentProviders {
  return provideEnvironmentInitializer(() => {
    ModuleRegistry.registerModules([AllCommunityModule]);
    // Enterprise: ModuleRegistry.registerModules([AllEnterpriseModule]);
    // LicenseManager.setLicenseKey(env.agGridLicenseKey);
  });
}

export const helixGridTheme = themeQuartz.withParams({
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: 13,
  foregroundColor: 'var(--hlx-text-primary)',
  backgroundColor: 'var(--hlx-surface-primary)',
  borderColor: 'var(--hlx-border-secondary)',
  wrapperBorderRadius: 'var(--hlx-border-radius-default)',
  headerBackgroundColor: 'var(--hlx-surface-minimal)',
  headerTextColor: 'var(--hlx-text-secondary)',
  headerFontWeight: 600,
  rowHoverColor: 'var(--hlx-surface-minimal-light, var(--hlx-surface-minimal))',
  accentColor: 'var(--hlx-icon-accent)',
  oddRowBackgroundColor: 'transparent',
});

export const HELIX_DEFAULT_COL_DEF: ColDef = {
  sortable: true,
  resizable: true,
  filter: true,
  flex: 1,
  minWidth: 120,
};
