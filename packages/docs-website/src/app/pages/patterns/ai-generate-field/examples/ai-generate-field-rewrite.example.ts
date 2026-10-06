import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Kind = 'draft' | 'rewrite' | 'shorten';
type Status = 'idle' | 'generating' | 'error';

const RESULTS: Record<Kind, string> = {
  draft:
    'New FDA guidance sets the expected pivotal trial design and primary endpoint for Phase III oncology candidates, to be agreed at the End-of-Phase-II meeting.',
  rewrite:
    'The FDA now expects the Phase III pivotal design and primary endpoint to be agreed at the End-of-Phase-II meeting before the trial starts.',
  shorten: 'FDA: agree Phase III design and endpoint at the End-of-Phase-II meeting.',
};

const htmlCode = `<div class="gen">
  <mat-form-field class="gen__field" appearance="outline" subscriptSizing="dynamic">
    <mat-label>Alert description</mat-label>
    <textarea matInput rows="3" [value]="value()"
      (input)="value.set($any($event.target).value)"></textarea>
  </mat-form-field>

  <div class="gen__bar">
    <button matButton class="hlx-btn-ai" [matMenuTriggerFor]="menu"
      [disabled]="status() === 'generating'">
      <mat-icon>auto_awesome</mat-icon>
      {{ status() === 'generating' ? 'Generating…' : 'AI' }}
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="run('draft')">Draft from scratch</button>
      <button mat-menu-item (click)="run('rewrite')" [disabled]="!value().trim()">Rewrite</button>
      <button mat-menu-item (click)="run('shorten')" [disabled]="!value().trim()">Shorten</button>
    </mat-menu>
    @if (lastUndo()) {
      <button matButton (click)="undo()">Undo</button>
    }
  </div>

  @if (status() === 'error') {
    <p class="gen__error" role="alert">Couldn't generate. <button matButton (click)="retry()">Retry</button></p>
  }

  @if (proposal(); as text) {
    <div class="gen__proposal" aria-live="polite">
      <div class="gen__proposal-head">
        <mat-icon aria-hidden="true">auto_awesome</mat-icon>
        <span>Suggested text — review before accepting</span>
      </div>
      <p class="gen__proposal-text">{{ text }}</p>
      <div class="gen__proposal-actions">
        <button matButton="filled" class="hlx-btn-ai" (click)="accept()">Accept</button>
        <button matButton (click)="retry()">Regenerate</button>
        <button matButton (click)="discard()">Discard</button>
      </div>
      <p class="gen__disclosure">AI-generated — check for accuracy.</p>
    </div>
  }
</div>`;

const styleCode = `.gen { padding: 1rem; max-width: 560px; }
.gen__field { width: 100%; }
.gen__bar { display: flex; gap: 0.5rem; align-items: center; }
.gen__bar mat-icon { color: var(--hlx-icon-accent, #5e33bf); }
.gen__error { color: var(--hlx-text-negative, #a3322a); }
.gen__proposal {
  margin-top: var(--hlx-spacing-2, 16px);
  padding: var(--hlx-spacing-2, 16px);
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
  background: var(--hlx-surface-minimal, #f1f3f4);
}
.gen__proposal-head { display: flex; align-items: center; gap: 0.5rem; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }
.gen__proposal-head mat-icon { color: var(--hlx-icon-accent, #5e33bf); }
.gen__proposal-text { margin: 0.5rem 0; }
.gen__proposal-actions { display: flex; gap: 0.5rem; }
.gen__disclosure { margin: 0.5rem 0 0; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInput, MatButton, MatMenuModule, MatIcon],
  styles: [styleCode],
})
class SampleComponent {
  private readonly destroyRef = inject(DestroyRef);
  private timer?: ReturnType<typeof setTimeout>;

  readonly value = signal(
    'FDA wants the trial design and endpoint sorted before Phase III starts.',
  );
  readonly proposal = signal<string | null>(null);
  readonly status = signal<Status>('idle');
  readonly lastKind = signal<Kind | null>(null);
  private readonly previous = signal<string | null>(null);
  readonly lastUndo = computed(() => this.previous() !== null);

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
  }

  run(kind: Kind): void {
    this.lastKind.set(kind);
    this.status.set('generating');
    this.proposal.set(null);
    this.timer = setTimeout(() => {
      this.proposal.set(RESULTS[kind]);
      this.status.set('idle');
    }, 1000);
  }

  retry(): void {
    const kind = this.lastKind();
    if (kind) this.run(kind);
  }

  accept(): void {
    const text = this.proposal();
    if (text === null) return;
    this.previous.set(this.value()); // enable undo
    this.value.set(text);
    this.proposal.set(null);
  }

  discard(): void {
    this.proposal.set(null); // original untouched
  }

  undo(): void {
    const prev = this.previous();
    if (prev !== null) {
      this.value.set(prev);
      this.previous.set(null);
    }
  }
}

export const AiGenerateFieldRewrite: InputViewerComponent = {
  exampleName: 'Generate & rewrite a field',
  dynamicComponent: SampleComponent,
  height: 52,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, signal } from '@angular/core';
// + Material form-field, input, button, menu, icon

// AI proposes; the user disposes. An action generates a proposal shown for review;
// Accept replaces the field (undoable), Discard restores the original exactly,
// Regenerate tries again. The user stays in control.
@Component({ /* … */ })
export class AlertDescriptionField {
  readonly value = signal('');
  readonly proposal = signal<string | null>(null);
  accept(): void { /* save previous for undo, then value.set(proposal) */ }
  discard(): void { this.proposal.set(null); }
}`,
};
