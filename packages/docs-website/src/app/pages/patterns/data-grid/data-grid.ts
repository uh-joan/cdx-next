import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-data-grid-pattern',
  templateUrl: './data-grid.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class DataGridPattern {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  providerSnippet = `// Registered once in app.config.ts
import { provideHelixAgGrid } from '@cdx/theme-ag-grid';

export const appConfig: ApplicationConfig = {
  providers: [provideHelixAgGrid()],
};`;

  gridSnippet = `import { HELIX_DEFAULT_COL_DEF, helixGridTheme } from '@cdx/theme-ag-grid';

@Component({
  template: \`
    <ag-grid-angular
      [theme]="theme"
      [rowData]="rows"
      [columnDefs]="columns"
      [defaultColDef]="defaultColDef"
      (gridReady)="onGridReady($event)"
      (stateUpdated)="saveColumns()"
    />\`,
})
export class TrialsGrid {
  readonly theme = helixGridTheme;        // Theming API, built from --hlx-* tokens
  readonly defaultColDef = HELIX_DEFAULT_COL_DEF;
}`;
}
