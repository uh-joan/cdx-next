import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-sources',
  templateUrl: './ai-sources.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiSources {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  collapseSnippet = `// Rank, show a preview, collapse the rest — mirrors reg-ai's thresholds.
private readonly previewLimit = 5;
private readonly showAllThreshold = 6;

readonly visibleSources = computed(() => {
  const docs = this.sources();
  return docs.length <= this.showAllThreshold ? docs : docs.slice(0, this.previewLimit);
});
readonly hiddenCount = computed(() => Math.max(0, this.sources().length - this.previewLimit));`;
}
