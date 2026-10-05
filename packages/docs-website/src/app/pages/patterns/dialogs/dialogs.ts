import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-dialogs',
  templateUrl: './dialogs.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight],
})
export class Dialogs {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  sizeSnippet = `export type HelixDialogSize = 'sm' | 'md' | 'lg' | 'side' | 'fullscreen';

const PANEL_CLASS: Record<HelixDialogSize, string> = {
  sm: 'hlx-dialog-sm',   // ~400px — a confirm
  md: 'hlx-dialog-md',   // ~560px — a short form
  lg: 'hlx-dialog-lg',   // ~800px — a rich task
  side: 'hlx-dialog-side',       // right-docked panel
  fullscreen: 'hlx-dialog-fullscreen',
};

export function helixDialog<D>(
  size: HelixDialogSize,
  config: MatDialogConfig<D> = {},
): MatDialogConfig<D> {
  // autoFocus stays on; order the actions so focus lands on the safe one.
  return { panelClass: PANEL_CLASS[size], ...config };
}`;

  structureSnippet = `<h2 mat-dialog-title>Delete this watch?</h2>
<mat-dialog-content>
  <p>You'll stop receiving alerts for Pembrolizumab. This can't be undone.</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button matButton mat-dialog-close>Cancel</button>
  <button matButton="filled" class="hlx-btn-negative" [mat-dialog-close]="true">
    Delete
  </button>
</mat-dialog-actions>`;
}
