import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  HelixFooterComponent,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { map } from 'rxjs';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

// In an app this is `HELIX_MEDIA.ltMd` from @cdx/theme-angular-material; inlined
// here only because the docs site builds the theme package from source.
const BELOW_MD = '(max-width: 959.98px)';

// The nav shows inline at md and up, and collapses into a menu below md — driven
// by the Helix breakpoint query, not a hardcoded width. Resize the preview to
// see it switch.
const htmlCode = `<div class="shell">
  <header hlx-header class="shell__header">
    <hlx-header-product-name>Cortellis</hlx-header-product-name>

    @if (!isCompact()) {
      <nav class="shell__nav" aria-label="Primary">
        @for (link of links; track link) {
          <a matButton [class.is-active]="link === active()" (click)="active.set(link)">
            {{ link }}
          </a>
        }
      </nav>
    }

    <hlx-header-global>
      @if (isCompact()) {
        <button matIconButton aria-label="Open navigation menu" [matMenuTriggerFor]="navMenu">
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #navMenu="matMenu">
          @for (link of links; track link) {
            <button mat-menu-item (click)="active.set(link)">{{ link }}</button>
          }
        </mat-menu>
      }
      <button matIconButton aria-label="Account">
        <mat-icon>account_circle</mat-icon>
      </button>
    </hlx-header-global>
  </header>

  <main class="shell__content">
    <h1>{{ active() }}</h1>
    <p>Each routed page renders here, inside the one shell. The header and footer
    are assembled once; the router fills this outlet.</p>
  </main>

  <footer hlx-footer slim class="shell__footer"></footer>
</div>`;

const styleCode = `.shell {
  display: flex;
  flex-direction: column;
  min-height: 420px;
  border: 1px solid var(--hlx-border-secondary);
  border-radius: var(--hlx-border-radius-default);
  overflow: hidden;
}
.shell__nav {
  display: flex;
  gap: var(--hlx-spacing-1, 8px);
  margin-inline-start: var(--hlx-spacing-3, 24px);
}
.shell__nav .is-active { font-weight: 700; }
.shell__content {
  flex: 1;
  padding: var(--hlx-spacing-4, 32px);
}
.shell__content h1 { margin-top: 0; }`;

@Component({
  template: htmlCode,
  imports: [
    HelixHeaderComponent,
    HelixHeaderProductNameOrLogoComponent,
    HelixHeaderGlobalComponent,
    HelixFooterComponent,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenuModule,
  ],
  styles: [styleCode],
})
class SampleComponent {
  private readonly breakpoints = inject(BreakpointObserver);

  readonly links = ['Alerts', 'Reports', 'Assistant'];
  readonly active = signal('Alerts');

  readonly isCompact = toSignal(
    this.breakpoints.observe(BELOW_MD).pipe(map((s) => s.matches)),
    { initialValue: false },
  );
}

export const AppShellBasic: InputViewerComponent = {
  exampleName: 'Responsive app shell',
  dynamicComponent: SampleComponent,
  height: 46,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HELIX_MEDIA } from '@cdx/theme-angular-material';
import { map } from 'rxjs';

// In a real app this is the Layout component with a <router-outlet/> in place of
// the demo content, and the nav items are a[routerLink] with routerLinkActive.
@Component({ /* imports: header/footer, button, icon, menu */ })
export class Layout {
  private readonly breakpoints = inject(BreakpointObserver);
  readonly active = signal('Alerts');
  readonly isCompact = toSignal(
    this.breakpoints.observe(HELIX_MEDIA.ltMd).pipe(map((s) => s.matches)),
    { initialValue: false },
  );
}`,
};
