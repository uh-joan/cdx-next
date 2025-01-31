import { Component, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'cdx-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  typographyHtml = `<div class="mat-body-1">`;

  typographyCss = `
  @use '@angular/material' as mat;
  @use '@cdx/theme-angular-material' as cdx;

  @include mat.typography-hierarchy(cdx.$helix-typography, 'body-1');
`;
  //typograflylevels
  typographyLevels: MatTableDataSource<any> = new MatTableDataSource([
    {
      level: 'Display large',
      className: 'mat-display-large',
      systemVariable: '--sys-display-large',
      nativeElement: 'h1',
      properties: {
        fontSize: '40px / 2.5rem',
        lineHeight: '56px / 3.5rem',
        fontFace: 'Regular Clarivate',
        fontWeight: '700 (bold)',
      },
    },
    {
      level: 'Display medium',
      className: 'mat-display-medium',
      nativeElement: 'h2',
      properties: {
        fontSize: '24px / 1.5rem',
        lineHeight: '32px / 2rem',
        fontFace: 'Regular Clarivate',
        fontWeight: '700 (bold)',
      },
    },
    {
      level: 'Display small',
      className: 'mat-display-small',
      nativeElement: 'h3',
      properties: {
        fontSize: '18px / 1.125rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Regular Clarivate',
        fontWeight: '700 (bold)',
      },
    },
    {
      level: 'Headline large',
      className: 'mat-headline-large',
      nativeElement: 'h4',
      properties: {
        fontSize: '32px / 2rem',
        lineHeight: '40px / 2.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '700 (bold)',
      },
    },
    {
      level: 'Headline medium',
      className: 'mat-headline-medium',
      nativeElement: 'h5',
      properties: {
        fontSize: '24px / 1.5rem',
        lineHeight: '32px / 2rem',
        fontFace: 'Source Sans 3',
        fontWeight: '600 (semi-bold)',
      },
    },
    {
      level: 'Headline small',
      className: 'mat-headline-small',
      nativeElement: 'h6',
      properties: {
        fontSize: '18px / 1.125rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '600 (semi-bold)',
      },
    },
    {
      level: 'Title large',
      className: 'mat-title-large',
      nativeElement: 'None',
      properties: {
        fontSize: '24px / 1.5rem',
        lineHeight: '32px / 2rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular)',
      },
    },
    {
      level: 'Title medium',
      className: 'mat-title-medium',
      nativeElement: 'None',
      properties: {
        fontSize: '18px / 1.125rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular)',
      },
    },
    {
      level: 'Title small',
      className: 'mat-title-small',
      nativeElement: 'None',
      properties: {
        fontSize: '16px / 1.125rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular)',
      },
    },
    {
      level: 'Body extra large',
      className: 'mat-body-xlarge',
      nativeElement: 'None',
      properties: {
        fontSize: '16px / 1rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular) / 600 (semi-bold)',
      },
    },
    {
      level: 'Body large / medium',
      className: 'mat-body-large',
      nativeElement: 'None',
      properties: {
        fontSize: '14px / 0.875rem',
        lineHeight: '24px / 1.5rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular)',
      },
    },
    {
      level: 'Body small',
      className: 'mat-body-small',
      nativeElement: 'None',
      properties: {
        fontSize: '13px / 0.8125rem',
        lineHeight: '16px / 1rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular)',
      },
    },
    {
      level: 'Label extra large',
      className: 'mat-label-xlarge',
      nativeElement: 'None',
      properties: {
        fontSize: '16px / 1rem',
        lineHeight: '24px / 1.25rem',
        fontFace: 'Source Sans 3',
        fontWeight: '400 (regular) / 600 (semi-bold)',
      },
    },
    {
      level: 'Label large / medium',
      className: 'mat-label-large',
      nativeElement: 'None',
      properties: {
        fontSize: '14px / 0.875rem',
        lineHeight: '20px / 1.25rem',
        fontFace: 'Source Sans 3',
        fontWeight: '600 (semi-bold)',
      },
    },
    {
      level: 'Label small',
      className: 'mat-label-small',
      nativeElement: 'None',
      properties: {
        fontSize: '12px / 0.75rem',
        lineHeight: '20px / 1.25rem',
        fontFace: 'Source Sans 3',
        fontWeight: '600 (semi-bold)',
      },
    },
  ]);

  displayedColumns = ['level', 'className', 'nativeElement', 'properties'];
}
