import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  HELIX_DEFAULT_COL_DEF,
  helixChipCellRenderer,
  helixDateCellRenderer,
  helixGridTheme,
} from '@hlx/theme-ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridReadyEvent,
  ModuleRegistry,
} from 'ag-grid-community';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

// In an app this registration lives in provideHelixAgGrid() at bootstrap; the
// example registers at module scope so the standalone demo works.
ModuleRegistry.registerModules([AllCommunityModule]);

const STORAGE_KEY = 'helix-demo-grid-columns';

interface Trial {
  drug: string;
  phase: string;
  sponsor: string;
  updated: string;
}

const htmlCode = `<div class="grid">
  <div class="grid__toolbar">
    <button matButton (click)="resetColumns()">Reset columns</button>
    <span class="grid__hint">Reorder or resize a column, then reload — the layout persists.</span>
  </div>
  <ag-grid-angular
    class="grid__table"
    [theme]="theme"
    [rowData]="rows"
    [columnDefs]="columns"
    [defaultColDef]="defaultColDef"
    (gridReady)="onGridReady($event)"
    (stateUpdated)="saveColumns()"
  />
</div>`;

const styleCode = `.grid { padding: 1rem; }
.grid__toolbar {
  display: flex;
  align-items: center;
  gap: var(--hlx-spacing-2, 16px);
  margin-bottom: var(--hlx-spacing-2, 16px);
}
.grid__hint {
  color: var(--hlx-text-secondary, #59676b);
  font: var(--sys-body-small, 400 13px/16px 'Source Sans 3', sans-serif);
}
.grid__table { width: 100%; height: 320px; }`;

@Component({
  template: htmlCode,
  imports: [AgGridAngular, MatButton],
  styles: [styleCode],
})
class SampleComponent {
  readonly theme = helixGridTheme;
  readonly defaultColDef = HELIX_DEFAULT_COL_DEF;

  private gridApi?: GridReadyEvent<Trial>['api'];

  readonly columns: ColDef<Trial>[] = [
    { field: 'drug', headerName: 'Drug', flex: 2 },
    {
      field: 'phase',
      headerName: 'Phase',
      // Shared Helix chip renderer from the package (styled with --hlx-* tokens).
      cellRenderer: helixChipCellRenderer,
    },
    { field: 'sponsor', headerName: 'Sponsor', flex: 2 },
    // Shared Helix date renderer: formats the ISO value as e.g. "2 Oct 2026".
    { field: 'updated', headerName: 'Updated', cellRenderer: helixDateCellRenderer },
  ];

  readonly rows: Trial[] = [
    { drug: 'Pembrolizumab', phase: 'Phase III', sponsor: 'Merck', updated: '2026-10-02' },
    { drug: 'Osimertinib', phase: 'Phase III', sponsor: 'AstraZeneca', updated: '2026-09-28' },
    { drug: 'Sotorasib', phase: 'Phase II', sponsor: 'Amgen', updated: '2026-09-21' },
    { drug: 'Adagrasib', phase: 'Phase II', sponsor: 'Mirati', updated: '2026-09-14' },
    { drug: 'Divarasib', phase: 'Phase I', sponsor: 'Genentech', updated: '2026-09-09' },
  ];

  onGridReady(event: GridReadyEvent<Trial>): void {
    this.gridApi = event.api;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        event.api.applyColumnState({
          state: JSON.parse(saved),
          applyOrder: true,
        });
      }
    } catch {
      /* storage may be unavailable (private window); ignore */
    }
  }

  saveColumns(): void {
    if (!this.gridApi) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(this.gridApi.getColumnState()),
      );
    } catch {
      /* ignore */
    }
  }

  resetColumns(): void {
    this.gridApi?.resetColumnState();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }
}

export const DataGridHelix: InputViewerComponent = {
  exampleName: 'Data grid with the Helix theme',
  dynamicComponent: SampleComponent,
  height: 52,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HELIX_DEFAULT_COL_DEF, helixGridTheme } from '@hlx/theme-ag-grid';

// Register modules once at bootstrap: provideHelixAgGrid() in app.config.ts.
// The grid uses the Helix Theming-API theme (built from --hlx-* tokens) and the
// shared default column def; column state is persisted to localStorage.
@Component({
  selector: 'app-trials-grid',
  imports: [AgGridAngular],
  template: \`
    <ag-grid-angular
      [theme]="theme" [rowData]="rows" [columnDefs]="columns"
      [defaultColDef]="defaultColDef"
      (gridReady)="onGridReady($event)" (stateUpdated)="saveColumns()" />\`,
})
export class TrialsGrid {
  readonly theme = helixGridTheme;
  readonly defaultColDef = HELIX_DEFAULT_COL_DEF;
  // onGridReady restores, stateUpdated saves, resetColumns clears.
}`,
};
