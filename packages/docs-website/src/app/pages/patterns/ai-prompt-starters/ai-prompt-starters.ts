import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-prompt-starters',
  templateUrl: './ai-prompt-starters.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiPromptStarters {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  seedSnippet = `readonly draft = signal('');

useStarter(prompt: string): void {
  // Seed the composer (editable) and focus — never send on click.
  this.draft.set(prompt);
  this.composer()?.nativeElement.focus();
}`;
}
