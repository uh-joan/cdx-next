import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-density',
  templateUrl: './density.html',
  styleUrls: ['./density.scss'],
  imports: [Page, MatDivider, Highlight],
})
export class Density {
  @HostBinding('class') hostClass = 'cdx-section';

  systemBackground = `
  body {
    background: var(--mat-sys-surface);
    color: var(--mat-sys-on-surface);
  }`;

  colorsFromPalette = `
  @use '@cdx/theme-angular-material' as cdx;

  .my-component {
      @include mat.chips-color(cdx.$helix-theme, $color-variant: primary);
  }`;

  densityExample = `
    @use '@angular/material' as mat;

    .my-component--dense {
        @include mat.button-density(-2);
    }

    .all-components--dense {
        @include mat.all-component-densities(-2);
    }
  `;
}
