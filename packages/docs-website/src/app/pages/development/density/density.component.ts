import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-density',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.scss'],
})
export class DensityComponent {
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
