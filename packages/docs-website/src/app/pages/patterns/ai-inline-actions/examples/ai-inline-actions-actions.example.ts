import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type State = 'idle' | 'generating' | 'done';

const SUMMARY =
  'This FDA guidance sets out the expected pivotal trial design and primary ' +
  'endpoint for Phase III oncology candidates, to be agreed at the ' +
  'End-of-Phase-II meeting before the trial begins.';

const htmlCode = `<mat-card class="doc" appearance="outlined">
  <mat-card-content>
    <h3 class="doc__title">FDA Guidance — Phase III oncology trials (2026)</h3>
    <p class="doc__body">
      Draft guidance describing the Agency's current thinking on pivotal trial
      design, endpoints and the safety database for Phase III oncology programmes…
    </p>

    <div class="doc__actions">
      <button matButton class="hlx-btn-ai" (click)="summarise()" [disabled]="state() === 'generating'">
        <mat-icon>auto_awesome</mat-icon> Summarise
      </button>
      <button matButton (click)="ask()">Ask about this</button>
    </div>

    @if (state() !== 'idle') {
      <div class="doc__result" aria-live="polite">
        <hlx-ai-avatar [animated]="state() === 'generating'" label="AI summary" />
        <div>
          @if (state() === 'generating') {
            <p class="doc__status">Summarising…</p>
          } @else {
            <p class="doc__summary">{{ summary() }}</p>
            <p class="doc__disclosure">AI-generated — check against the source.</p>
          }
        </div>
      </div>
    }
  </mat-card-content>
</mat-card>`;

const styleCode = `.doc { max-width: 560px; margin: 1rem; }
.doc__title { margin: 0 0 0.5rem; font: var(--sys-headline-small, 600 18px/24px 'Source Sans 3', sans-serif); }
.doc__body { margin: 0 0 var(--hlx-spacing-2, 16px); color: var(--hlx-text-secondary, #59676b); }
.doc__actions { display: flex; gap: var(--hlx-spacing-1, 8px); }
.doc__actions mat-icon { color: var(--hlx-icon-accent, #5e33bf); }
.doc__result {
  display: flex;
  gap: var(--hlx-spacing-2, 16px);
  margin-top: var(--hlx-spacing-2, 16px);
  padding-top: var(--hlx-spacing-2, 16px);
  border-top: 1px solid var(--hlx-border-secondary, #dfe1e2);
}
.doc__status { margin: 0.25rem 0; color: var(--hlx-text-secondary, #59676b); }
.doc__summary { margin: 0.25rem 0; }
.doc__disclosure { margin: 0.5rem 0 0; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }`;

@Component({
  template: htmlCode,
  imports: [MatCardModule, MatButton, MatIcon, HelixAiAvatarComponent],
  styles: [styleCode],
})
class SampleComponent {
  private readonly destroyRef = inject(DestroyRef);
  private timer?: ReturnType<typeof setTimeout>;

  readonly state = signal<State>('idle');
  readonly summary = signal('');

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
  }

  summarise(): void {
    this.state.set('generating');
    this.summary.set('');
    this.timer = setTimeout(() => {
      this.summary.set(SUMMARY);
      this.state.set('done');
    }, 1200);
  }

  ask(): void {
    // In an app this seeds the assistant composer with a scoped, editable prompt.
    this.state.set('idle');
  }
}

export const AiInlineActions: InputViewerComponent = {
  exampleName: 'AI actions on a document',
  dynamicComponent: SampleComponent,
  height: 44,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';
// + Material card, button, icon

// AI actions scoped to this document. "Summarise" shows the result inline (AI
// avatar + disclosure); "Ask about this" seeds the assistant with a scoped,
// editable prompt — the user stays in control.
@Component({ /* … */ })
export class DocumentAiActions {
  summarise(doc: Doc): void { /* build "Summarise this document: …" → inline result */ }
  ask(doc: Doc): void { this.assistant.seed(\`Ask about \${doc.title}: \`); }
}`,
};
