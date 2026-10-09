import { NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDivider } from '@angular/material/divider';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelixFooterComponent } from '@hlx/ngx-branding';
import { map } from 'rxjs';

import { StorybookEmbed } from '../../components/storybook-embed/storybook-embed';

export type PageTab = 'overview' | 'code';

/**
 * Docs page shell. With `tabbed`, content is split into Helix-style
 * **Overview** (`<div overview>`: design guidance) and **Code**
 * (`<div code>`: API link, Storybook playground and examples) tabs, selected
 * with the `?tab=code` query param so each tab has its own URL.
 */
@Component({
  // Shared by every docs page; predates the cdx prefix rule.
  selector: 'hlx-page',
  templateUrl: './page.html',
  styleUrl: './page.scss',
  imports: [
    HelixFooterComponent,
    UpperCasePipe,
    NgTemplateOutlet,
    MatDivider,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel,
    RouterLink,
    StorybookEmbed,
  ],
})
export class Page {
  title = input<string>();
  subtitle = input<string>();
  section = input<string>();
  componentName = input<string>();
  /** Storybook component id (e.g. `components-button`) for the Code tab. */
  storybookId = input<string>();
  tabbed = input(false, { transform: booleanAttribute });

  private readonly tabParam = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(
      map((params) => params.get('tab')),
    ),
  );

  readonly activeTab = computed<PageTab>(() =>
    this.tabParam() === 'code' ? 'code' : 'overview',
  );
}
