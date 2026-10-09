import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';

import { ColorPill } from '../../../components/color-pill/color-pill';
import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-colors',
  templateUrl: './colors.html',
  styleUrls: ['./colors.scss'],
  imports: [
    Page,
    MatDivider,
    ExternalLink,
    Highlight,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    ColorPill,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
  ],
})
export class Colors {
  @HostBinding('class') hostClass = 'cdx-section';

  tokenList: MatTableDataSource<{
    name: string;
    primitive: string;
    value: string;
  }> = new MatTableDataSource([
    {
      name: '$surface-primary',
      primitive: 'neutral-0',
      value: '#0077cc',
    },
    {
      name: '$surface-minimal',
      primitive: 'neutral-100',
      value: '#f2f2f2',
    },
    {
      name: '$surface-contrast',
      primitive: 'neutral-200',
      value: '#dfe1e2',
    },
    {
      name: '$surface-invert',
      primitive: 'neutral-800',
      value: '#2a2b2d',
    },
    {
      name: '$surface-info',
      primitive: 'blue-100',
      value: '#d7e8f7',
    },
    {
      name: '$surface-positive',
      primitive: 'green-100',
      value: '#d2f7d6',
    },
    {
      name: '$surface-negative',
      primitive: 'red-100',
      value: '#fadcda',
    },
    {
      name: '$surface-warn',
      primitive: 'yellow-100',
      value: '#ffefd1',
    },
    {
      name: '$text-primary',
      primitive: 'neutral-800',
      value: '#2a2b2d',
    },
    {
      name: '$text-secondary',
      primitive: 'neutral-600',
      value: '#5f6368',
    },
    {
      name: '$text-invert',
      primitive: 'neutral-0',
      value: '#ffffff',
    },
    {
      name: '$border-primary',
      primitive: 'neutral-400',
      value: '#babcbc',
    },
    {
      name: '$border-secondary',
      primitive: 'neutral-200',
      value: '#dfe1e2',
    },
    {
      name: '$border-contrast',
      primitive: 'neutral-600',
      value: '#5f6368',
    },
    {
      name: '$border-invert',
      primitive: 'neutral-0',
      value: '#ffffff',
    },
    {
      name: '$icon-primary',
      primitive: 'neutral-800',
      value: '#2a2b2d',
    },
    {
      name: '$icon-secondary',
      primitive: 'neutral-600',
      value: '#5f6368',
    },
    {
      name: '$icon-invert',
      primitive: 'neutral-0',
      value: '#ffffff',
    },
    {
      name: '$icon-info',
      primitive: 'blue-900',
      value: '#031c40',
    },
    {
      name: '$icon-positive',
      primitive: 'green-900',
      value: '#003600',
    },
    {
      name: '$icon-negative',
      primitive: 'red-500',
      value: '#c43136',
    },
    {
      name: '$icon-warn',
      primitive: 'yellow-900',
      value: '#402b00',
    },
    {
      name: '$icon-accent',
      primitive: 'purple-600',
      value: '#5e33bf',
    },
    {
      name: '$icon-brand',
      primitive: 'purple-400',
      value: '#b175e1',
    },
    {
      name: '$icon-disabled',
      primitive: 'neutral-400',
      value: '#babcbc',
    },
  ]);

  displayedColumns = ['name', 'primitive', 'value'];

  systemBackground = `body {
  background: var(--mat-sys-surface);
  color: var(--mat-sys-on-surface);
}`;

  colorsFromPalette = `@use '@hlx/theme-angular-material' as hlx;
  
.my-error-component {
    @include mat.chips-color(hlx.$helix-theme, $color-variant: error);
}`;

  useTokens = `@use '@hlx/theme-angular-material' as hlx;

.some-class {
  color: hlx.$text-primary;
  background-color: hlx.$surface-primary;
}`;
}
