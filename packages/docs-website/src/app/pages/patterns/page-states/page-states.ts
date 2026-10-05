import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-page-states',
  templateUrl: './page-states.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class PageStates {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  switchSnippet = `@switch (alerts.status()) {
  @case ('loading') {
    <app-alerts-skeleton />
  }
  @case ('error') {
    <hlx-empty-state
      tone="error"
      heading="Couldn't load alerts"
      message="Something went wrong. Please try again."
    >
      <button hlx-empty-state-actions matButton="outlined" (click)="alerts.reload()">
        Retry
      </button>
    </hlx-empty-state>
  }
  @default {
    @if (alerts.value().length) {
      <app-alerts-grid [rows]="alerts.value()" />
    } @else {
      <hlx-empty-state
        heading="No alerts yet"
        message="Alerts you create will appear here."
      >
        <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" (click)="createAlert()">
          Create an alert
        </button>
      </hlx-empty-state>
    }
  }
}`;
}
