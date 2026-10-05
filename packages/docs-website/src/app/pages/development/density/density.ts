import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-density',
  templateUrl: './density.html',
  styleUrls: ['./density.scss'],
  imports: [Page, MatDivider, MatTableModule, Highlight],
})
export class Density {
  @HostBinding('class') hostClass = 'cdx-section';

  densityExample = `
  <!-- One component -->
  <button matButton="filled" class="hlx-density--2">Save</button>

  <!-- Every component inside the form -->
  <form class="hlx-density--1">
    <mat-form-field>...</mat-form-field>
    <mat-slide-toggle>...</mat-slide-toggle>
    <button matButton="filled" class="hlx-density-0">Submit</button>
  </form>
  `;

  columns = ['className', 'button', 'formField', 'chip', 'toggle', 'table'];

  levels = [
    {
      className: 'hlx-density-0',
      button: '40px',
      formField: '56px',
      chip: '32px',
      toggle: '52 × 32px',
      table: '48 / 56px',
    },
    {
      className: 'hlx-density--1',
      button: '36px',
      formField: '52px',
      chip: '28px',
      toggle: '46 × 28px',
      table: '44 / 52px',
    },
    {
      className: 'hlx-density--2',
      button: '32px',
      formField: '48px',
      chip: '24px',
      toggle: '40 × 24px',
      table: '40 / 48px',
    },
    {
      className: 'hlx-density--3',
      button: '28px',
      formField: '44px',
      chip: '—',
      toggle: '—',
      table: '—',
    },
    {
      className: 'hlx-density--4',
      button: '—',
      formField: '40px',
      chip: '—',
      toggle: '—',
      table: '—',
    },
  ];

  deprecatedColumns = ['old', 'replacement'];

  deprecated = [
    { old: 'hlx-btn-small', replacement: 'hlx-density--1' },
    { old: 'hlx-btn-xsmall', replacement: 'hlx-density--2' },
    { old: 'hlx-btn-xxsmall', replacement: 'hlx-density--3' },
    { old: 'hlx-chip-small', replacement: 'hlx-density--1' },
    { old: 'hlx-chip-xsmall', replacement: 'hlx-density--2' },
    { old: 'hlx-input-small', replacement: 'hlx-density--3' },
    { old: 'hlx-input-x-small', replacement: 'hlx-density--4' },
    { old: 'hlx-slide-toggle-small', replacement: 'hlx-density--2' },
  ];
}
