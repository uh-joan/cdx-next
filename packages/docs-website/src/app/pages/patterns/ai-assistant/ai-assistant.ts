import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-assistant',
  templateUrl: './ai-assistant.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiAssistant {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  liveRegionSnippet = `<!-- The whole answer area is one polite live region -->
<div class="assistant-turn" aria-live="polite">
  @if (generating()) {
    <p class="assistant-turn__status">{{ status() }}</p>
  }
  <div class="assistant-turn__answer">{{ answer() }}</div>
</div>`;

  feedbackSnippet = `<button
  matIconButton
  aria-label="Good answer"
  [attr.aria-pressed]="rating() === 'up'"
  (click)="rate('up')"
>
  <mat-icon>thumb_up</mat-icon>
</button>`;
}
