import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-elevation',
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss'],
})
export class ElevationComponent {
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

  smallBoxShadow = 'box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.12)';
  mediumBoxShadow = 'box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.12)';
  largeBoxShadow = 'box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.12)';
}
