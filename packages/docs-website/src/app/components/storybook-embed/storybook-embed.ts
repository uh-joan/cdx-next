import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ExternalLink } from '../external-link/external-link';

/**
 * Where the Storybook build is served. Defaults to the local
 * `nx run storybook:storybook` server in dev and `/storybook` (deployed next
 * to the docs site) in production; override with `VITE_STORYBOOK_URL`.
 */
export const STORYBOOK_URL = (
  import.meta.env.VITE_STORYBOOK_URL ??
  (import.meta.env.DEV ? 'http://localhost:4400' : '/storybook')
).replace(/\/$/, '');

/**
 * Embeds a component's Storybook docs page (primary story with its live
 * controls table, plus the other stories) in a docs page.
 */
@Component({
  selector: 'cdx-storybook-embed',
  templateUrl: './storybook-embed.html',
  styleUrl: './storybook-embed.scss',
  imports: [ExternalLink],
})
export class StorybookEmbed {
  private sanitizer = inject(DomSanitizer);

  /** Storybook component id (the title, kebab-cased), e.g. `components-button`. */
  componentId = input.required<string>();
  title = input<string>('Storybook playground');
  height = input<number>(720);

  private readonly docsId = computed(
    () => `${encodeURIComponent(this.componentId())}--docs`,
  );

  // Component ids are authored in our templates and the base URL comes from
  // build config, so the resulting iframe URL is trusted.
  readonly iframeUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `${STORYBOOK_URL}/iframe.html?id=${this.docsId()}&viewMode=docs`,
    ),
  );

  readonly storybookUrl = computed(
    () => `${STORYBOOK_URL}/?path=/docs/${this.docsId()}`,
  );
}
