import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-density',
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.scss'],
  imports: [PageComponent, MatDivider, HighlightComponent],
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
