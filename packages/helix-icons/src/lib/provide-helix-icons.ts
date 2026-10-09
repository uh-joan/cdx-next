import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { HELIX_ICONS } from './icons.generated';
import { HELIX_PICTOGRAMS } from './pictograms.generated';

/** Namespace for `<mat-icon svgIcon="hlx:ai-summary">`. */
export const HELIX_ICON_NAMESPACE = 'hlx';

/** Namespace for `<mat-icon svgIcon="hlx-pictogram:pictogram-001-light-purple-blue">`. */
export const HELIX_PICTOGRAM_NAMESPACE = 'hlx-pictogram';

export interface HelixIconsOptions {
  /**
   * URL path where the app serves the pictogram SVGs, copied from
   * `node_modules/@hlx/helix-icons/svg/pictograms`. Pictograms are fetched on
   * first use, so they add nothing to the bundle.
   */
  pictogramsPath?: string;
}

/**
 * Registers the custom Helix icons and pictograms with `MatIconRegistry`.
 *
 * Standard icons come from the Material Symbols font; this only adds the
 * Clarivate icons that Material Symbols doesn't have.
 */
export function provideHelixIcons(
  options: HelixIconsOptions = {},
): EnvironmentProviders {
  const pictogramsPath = (
    options.pictogramsPath ?? 'assets/helix-pictograms'
  ).replace(/\/$/, '');

  return makeEnvironmentProviders([
    provideEnvironmentInitializer(() => {
      const registry = inject(MatIconRegistry);
      const sanitizer = inject(DomSanitizer);

      for (const [name, svg] of Object.entries(HELIX_ICONS)) {
        registry.addSvgIconLiteralInNamespace(
          HELIX_ICON_NAMESPACE,
          name,
          // The SVGs are generated from the Figma library at build time
          sanitizer.bypassSecurityTrustHtml(svg),
        );
      }

      for (const name of HELIX_PICTOGRAMS) {
        registry.addSvgIconInNamespace(
          HELIX_PICTOGRAM_NAMESPACE,
          name,
          sanitizer.bypassSecurityTrustResourceUrl(
            `${pictogramsPath}/${name}.svg`,
          ),
        );
      }
    }),
  ]);
}
