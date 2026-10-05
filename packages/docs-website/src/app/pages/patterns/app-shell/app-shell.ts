import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-app-shell',
  templateUrl: './app-shell.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AppShell {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  routeDataSnippet = `export interface ShellRouteData {
  showFooter?: boolean; // default true
  showNav?: boolean;    // default true
}

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'alerts',
        loadComponent: () => import('./alerts/alerts').then((m) => m.AlertsPage),
        data: { showFooter: true } satisfies ShellRouteData,
      },
      {
        path: 'assistant',
        loadComponent: () => import('./assistant/assistant').then((m) => m.AssistantPage),
        data: { showFooter: false, showNav: false } satisfies ShellRouteData,
      },
    ],
  },
];`;

  responsiveSnippet = `import { BreakpointObserver } from '@angular/cdk/layout';
import { HELIX_MEDIA } from '@cdx/theme-angular-material';

private readonly breakpoints = inject(BreakpointObserver);
readonly isCompact = toSignal(
  this.breakpoints.observe(HELIX_MEDIA.ltMd).pipe(map((s) => s.matches)),
  { initialValue: false },
);`;
}
