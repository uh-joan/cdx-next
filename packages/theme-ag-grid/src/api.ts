import {
  EnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';
import {
  AllCommunityModule,
  ColDef,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';

/**
 * Register the AG Grid modules (and, where used, the Enterprise modules and the
 * licence) once at app bootstrap, so no feature repeats
 * `ModuleRegistry.registerModules(...)`.
 *
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideHelixAgGrid()],
 * };
 * ```
 */
export function provideHelixAgGrid(): EnvironmentProviders {
  return provideEnvironmentInitializer(() => {
    ModuleRegistry.registerModules([AllCommunityModule]);
    // Enterprise: ModuleRegistry.registerModules([AllEnterpriseModule]);
    // LicenseManager.setLicenseKey(env.agGridLicenseKey);
  });
}

/**
 * The Helix AG Grid theme (AG Grid v36+ Theming API), built from the Helix
 * `--hlx-*` CSS custom properties so the grid follows the app theme. Bind it with
 * the grid's `[theme]` input.
 */
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

/** The shared default column definition: sortable, resizable, filterable, flex. */
export const HELIX_DEFAULT_COL_DEF: ColDef = {
  sortable: true,
  resizable: true,
  filter: true,
  flex: 1,
  minWidth: 120,
};
