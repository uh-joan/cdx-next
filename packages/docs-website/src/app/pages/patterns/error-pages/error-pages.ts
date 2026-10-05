import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-error-pages',
  templateUrl: './error-pages.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class ErrorPages {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  pageSnippet = `<div class="error-page">
  <hlx-empty-state
    tone="error"
    heading="Page not found"
    message="We couldn't find that page. It may have moved or no longer exist."
  >
    <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" routerLink="/">
      Go to home
    </button>
  </hlx-empty-state>
</div>`;
}
