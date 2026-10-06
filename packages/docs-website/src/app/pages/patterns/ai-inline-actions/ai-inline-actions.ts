import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-inline-actions',
  templateUrl: './ai-inline-actions.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiInlineActions {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  seedSnippet = `summarise(doc: Doc): void {
  // Seed the assistant with a scoped, editable prompt — the user stays in control.
  this.assistant.seed(\`Summarise this document: \${doc.title}\`);
}`;
}
