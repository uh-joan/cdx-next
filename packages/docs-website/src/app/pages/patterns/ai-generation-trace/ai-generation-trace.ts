import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-generation-trace',
  templateUrl: './ai-generation-trace.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiGenerationTrace {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  traceSnippet = `<mat-expansion-panel class="trace">
  <mat-expansion-panel-header>
    <mat-panel-title>How was this generated?</mat-panel-title>
  </mat-expansion-panel-header>

  <ol class="trace__steps">
    @for (step of steps(); track step.label) {
      <li [class.is-done]="step.done">
        <mat-icon>{{ step.done ? 'check_circle' : 'pending' }}</mat-icon>
        {{ step.label }}
      </li>
    }
  </ol>
</mat-expansion-panel>`;
}
