import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-usage-limits',
  templateUrl: './ai-usage-limits.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiUsageLimits {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  bannerSnippet = `@if (contextTooLong()) {
  <hlx-notification
    severity="warn"
    title="This conversation is getting long"
    action="Start a new chat"
    (actionEvent)="newChat()"
  >
    Start a new chat to keep answers accurate.
  </hlx-notification>
}`;
}
