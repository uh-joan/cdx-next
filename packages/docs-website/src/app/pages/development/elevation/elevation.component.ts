import { Component, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface ElTable {
  name: string;
  class: string;
  value: string;
  example?: string;
}

@Component({
  selector: 'cdx-elevation',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss'],
})
export class ElevationComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  basePath = '../../assets/elevation/';
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

  dataSource = new MatTableDataSource<ElTable>([
    {
      name: 'small',
      class: 'hlx-elevation-sm',
      example: 'sm',
      value: 'box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.12)',
    },
    {
      name: 'medium',
      class: 'hlx-elevation-md',
      example: 'md',
      value: 'box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.12)',
    },
    {
      name: 'large',
      class: 'hlx-elevation-lg',
      example: 'lg',
      value: 'box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.12)',
    },
  ]);

  displayedColumns: string[] = ['name', 'example', 'class', 'value'];

  smallBoxShadow = 'box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.12)';
  mediumBoxShadow = 'box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.12)';
  largeBoxShadow = 'box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.12)';
}
