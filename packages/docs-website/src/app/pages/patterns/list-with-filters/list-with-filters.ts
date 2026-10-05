import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-list-with-filters',
  templateUrl: './list-with-filters.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class ListWithFilters {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  deriveSnippet = `readonly search = signal('');
readonly phases = signal<ReadonlySet<string>>(new Set());

// The chips, the count and the table all read from this one derived value,
// so they can never disagree.
readonly rows = computed(() => {
  const q = this.search().trim().toLowerCase();
  const phases = this.phases();
  return this.allRows().filter(
    (r) =>
      (!q || r.drug.toLowerCase().includes(q)) &&
      (phases.size === 0 || phases.has(r.phase)),
  );
});`;

  emptySnippet = `@if (rows().length) {
  <table mat-table [dataSource]="rows()"> … </table>
} @else {
  <hlx-empty-state
    heading="No results match your filters"
    message="Try removing a filter or broadening your search."
  >
    <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" (click)="clearAll()">
      Clear filters
    </button>
  </hlx-empty-state>
}`;
}
