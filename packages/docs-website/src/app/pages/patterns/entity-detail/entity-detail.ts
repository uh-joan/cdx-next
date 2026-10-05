import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-entity-detail',
  templateUrl: './entity-detail.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class EntityDetail {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  lazySnippet = `<mat-accordion>
  <mat-expansion-panel [disabled]="!counts().trials" (opened)="load('trials')">
    <mat-expansion-panel-header>
      <mat-panel-title>Clinical trials</mat-panel-title>
      <mat-panel-description>{{ counts().trials }}</mat-panel-description>
    </mat-expansion-panel-header>

    @switch (trials.status()) {
      @case ('loading') { <app-section-skeleton /> }
      @case ('error') {
        <hlx-empty-state tone="error" heading="Couldn't load trials">
          <button hlx-empty-state-actions matButton="outlined" (click)="trials.reload()">Retry</button>
        </hlx-empty-state>
      }
      @default { <app-trials-table [rows]="trials.value()" /> }
    }
  </mat-expansion-panel>
</mat-accordion>`;
}
