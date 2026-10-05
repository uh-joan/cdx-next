import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-export',
  templateUrl: './export.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight],
})
export class Export {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  flowSnippet = `private readonly snackBar = inject(MatSnackBar);
readonly exporting = signal(false);

export(format: 'csv' | 'xlsx'): void {
  this.exporting.set(true);
  const ref = this.snackBar.open('Preparing your export…');

  this.exports.create(format).subscribe({
    next: (file) => {
      ref.dismiss();
      this.snackBar.open('Export ready', 'Download', { duration: 6000 })
        .onAction().subscribe(() => this.download(file));
      this.exporting.set(false);
    },
    error: () => {
      ref.dismiss();
      this.snackBar.open('Export failed', 'Retry', { duration: 8000 })
        .onAction().subscribe(() => this.export(format));
      this.exporting.set(false);
    },
  });
}`;
}
