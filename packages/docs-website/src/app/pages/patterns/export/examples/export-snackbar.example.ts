import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="export">
  <button matButton="outlined" [matMenuTriggerFor]="menu" [disabled]="exporting()">
    <mat-icon>download</mat-icon>
    {{ exporting() ? 'Exporting…' : 'Export' }}
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item (click)="export('CSV')">Export as CSV</button>
    <button mat-menu-item (click)="export('Excel')">Export as Excel</button>
  </mat-menu>
  <p class="export__hint">Exports the current filter (42 rows).</p>
</div>`;

const styleCode = `.export { padding: 1rem; }
.export__hint {
  margin: 0.75rem 0 0;
  color: var(--hlx-text-secondary, #59676b);
  font: var(--sys-body-small, 400 13px/16px 'Source Sans 3', sans-serif);
}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon, MatMenuModule],
  styles: [styleCode],
})
class SampleComponent {
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  private timer?: ReturnType<typeof setTimeout>;

  readonly exporting = signal(false);

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
  }

  export(format: string): void {
    this.exporting.set(true);
    const preparing = this.snackBar.open(`Preparing your ${format} export…`);

    // Simulate the server generating the file; a real app calls its export API.
    this.timer = setTimeout(() => {
      preparing.dismiss();
      this.exporting.set(false);
      const ready = this.snackBar.open(`${format} export ready`, 'Download', {
        duration: 6000,
      });
      ready.onAction().subscribe(() => {
        this.snackBar.open('Downloading…', undefined, { duration: 2000 });
      });
    }, 1500);
  }
}

export const ExportSnackbar: InputViewerComponent = {
  exampleName: 'Export with snackbar feedback',
  dynamicComponent: SampleComponent,
  height: 18,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// + Material button, icon, menu

// Pick a format from one menu; snackbars carry the async state (preparing →
// ready with a Download action, or failed with Retry). The export runs in the
// background — the screen is never blocked.
@Component({ /* … */ })
export class ExportMenu {
  private readonly snackBar = inject(MatSnackBar);
  readonly exporting = signal(false);

  export(format: 'csv' | 'xlsx'): void {
    this.exporting.set(true);
    const ref = this.snackBar.open('Preparing your export…');
    // call export API → on success: ref.dismiss() + 'Export ready' (Download)
    //               → on error:   ref.dismiss() + 'Export failed' (Retry)
  }
}`,
};
