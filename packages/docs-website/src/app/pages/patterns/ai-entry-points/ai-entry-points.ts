import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-entry-points',
  templateUrl: './ai-entry-points.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiEntryPoints {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  promoSnippet = `// A promo introduces the capability once, then stays dismissed.
readonly promoVisible = signal(this.seenPromo() === false);

dismissPromo(): void {
  this.promoVisible.set(false);
  this.markPromoSeen(); // persist — don't show it again
}

// Every entry point lands on the same assistant surface.
openAssistant(from: 'header' | 'fab' | 'promo'): void {
  this.assistant.open({ source: from });
}`;
}
