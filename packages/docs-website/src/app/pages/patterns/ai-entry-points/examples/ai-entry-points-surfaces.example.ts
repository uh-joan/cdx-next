import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Source = 'header' | 'fab' | 'promo';

const htmlCode = `<div class="shell">
  <mat-toolbar class="shell__bar">
    <span class="shell__title">Cortellis</span>
    <span class="shell__spacer"></span>
    <!-- Primary entry: labelled, marked with the AI treatment -->
    <button matButton class="hlx-btn-ai" (click)="open('header')">
      <mat-icon>auto_awesome</mat-icon> Ask AI
    </button>
  </mat-toolbar>

  <div class="shell__body">
    @if (promoVisible()) {
      <!-- One-time, dismissible promo: introduces the capability, then stays gone -->
      <div class="promo" role="region" aria-label="New: AI research assistant">
        <span class="promo__accent" aria-hidden="true"></span>
        <hlx-ai-avatar label="AI" />
        <div class="promo__text">
          <p class="promo__title">Meet the research assistant</p>
          <p class="promo__desc">Ask questions about any drug, trial or document — in plain language.</p>
        </div>
        <div class="promo__actions">
          <button matButton="filled" class="hlx-btn-ai" (click)="open('promo')">Try it</button>
          <button matIconButton aria-label="Dismiss" (click)="dismissPromo()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>
    }

    <p class="shell__placeholder">Your workspace content…</p>

    @if (opened()) {
      <p class="shell__opened" aria-live="polite">
        <mat-icon aria-hidden="true">auto_awesome</mat-icon>
        Assistant opened from the <strong>{{ opened() }}</strong> — one surface, wherever you enter.
      </p>
    }
  </div>

  <!-- Secondary entry: extended FAB with an accessible name, same treatment -->
  <button matFab extended class="shell__fab hlx-btn-ai"
    aria-label="Ask the AI assistant" (click)="open('fab')">
    <mat-icon>auto_awesome</mat-icon> Ask AI
  </button>
</div>`;

const styleCode = `.shell {
  position: relative;
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
  overflow: hidden;
  background: var(--hlx-surface-primary, #fff);
}
.shell__bar { gap: 0.5rem; }
.shell__title { font-weight: 600; }
.shell__spacer { flex: 1 1 auto; }
.shell__bar .hlx-btn-ai mat-icon { margin-right: 4px; }
.shell__body { padding: var(--hlx-spacing-2, 16px); min-height: 180px; }
.shell__placeholder { color: var(--hlx-text-secondary, #59676b); margin: var(--hlx-spacing-2, 16px) 0; }
.shell__opened {
  display: flex; align-items: center; gap: 0.5rem;
  color: var(--hlx-text-secondary, #59676b);
}
.shell__opened mat-icon { color: var(--hlx-icon-accent, #5e33bf); }
.shell__fab { position: absolute; right: 16px; bottom: 16px; }

.promo {
  position: relative;
  display: flex; align-items: center; gap: var(--hlx-spacing-2, 16px);
  padding: var(--hlx-spacing-2, 16px);
  padding-left: calc(var(--hlx-spacing-2, 16px) + 4px);
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
  background: var(--hlx-surface-minimal, #f1f3f4);
}
.promo__accent {
  position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: var(--hlx-gradient-ai, linear-gradient(30deg, #3595f0, #b175e1));
}
.promo__text { flex: 1 1 auto; min-width: 0; }
.promo__title { margin: 0; font-weight: 600; }
.promo__desc { margin: 2px 0 0; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }
.promo__actions { display: flex; align-items: center; gap: 0.25rem; }`;

@Component({
  template: htmlCode,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    HelixAiAvatarComponent,
  ],
  styles: [styleCode],
})
class SampleComponent {
  readonly promoVisible = signal(true);
  readonly opened = signal<Source | null>(null);

  open(from: Source): void {
    // Every entry point lands on the same assistant surface.
    this.opened.set(from);
  }

  dismissPromo(): void {
    // In an app, also persist this (e.g. user settings) so it stays dismissed.
    this.promoVisible.set(false);
  }
}

export const AiEntryPointsSurfaces: InputViewerComponent = {
  exampleName: 'Header, FAB and promo banner',
  dynamicComponent: SampleComponent,
  height: 48,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';
// + Material toolbar, button (incl. FAB), icon

// Three entry points, one treatment, one destination. A labelled header button and
// an extended FAB (both hlx-btn-ai), plus a one-time dismissible promo banner using
// the AI gradient + hlx-ai-avatar. All call open() on the same assistant surface.
@Component({ /* … */ })
export class AiEntryPoints {
  readonly promoVisible = signal(true);
  open(from: 'header' | 'fab' | 'promo'): void { this.assistant.open({ source: from }); }
  dismissPromo(): void { this.promoVisible.set(false); /* + persist */ }
}`,
};
