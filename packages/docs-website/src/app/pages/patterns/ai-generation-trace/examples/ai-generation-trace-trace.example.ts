import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

interface Step {
  label: string;
  done: boolean;
}

const htmlCode = `<div class="answer">
  <p class="answer__text">
    For a Phase III oncology candidate, the FDA typically expects the pivotal trial
    design and primary endpoint agreed at the End-of-Phase-II meeting. See the
    linked sources for the current guidance.
  </p>

  <mat-expansion-panel class="trace" hideToggle="false">
    <mat-expansion-panel-header>
      <mat-panel-title>How was this generated?</mat-panel-title>
    </mat-expansion-panel-header>

    <dl class="trace__summary">
      <div><dt>Question</dt><dd>FDA expectations for a Phase III oncology trial</dd></div>
      <div><dt>Classified as</dt><dd>Regulatory guidance · Oncology</dd></div>
      <div><dt>Filters</dt><dd>Region: US · Document type: Guidance</dd></div>
    </dl>

    <ol class="trace__steps">
      @for (step of steps(); track step.label) {
        <li [class.is-done]="step.done">
          <mat-icon aria-hidden="true">{{ step.done ? 'check_circle' : 'pending' }}</mat-icon>
          <span>{{ step.label }}</span>
        </li>
      }
    </ol>
  </mat-expansion-panel>

  <p class="answer__replay">
    <button matButton (click)="replay()">Replay trace</button>
  </p>
</div>`;

const styleCode = `.answer { padding: 1rem; max-width: 640px; }
.answer__text { margin: 0 0 var(--hlx-spacing-2, 16px); }
.trace__summary { margin: 0 0 var(--hlx-spacing-2, 16px); display: grid; gap: 0.5rem; }
.trace__summary dt { color: var(--hlx-text-secondary, #59676b); font-size: 13px; }
.trace__summary dd { margin: 0; }
.trace__steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.trace__steps li { display: flex; align-items: center; gap: 0.5rem; color: var(--hlx-text-secondary, #59676b); }
.trace__steps li.is-done { color: var(--hlx-text-primary, #1b2426); }
.trace__steps mat-icon { color: var(--hlx-icon-secondary, #59676b); }
.trace__steps li.is-done mat-icon { color: var(--hlx-icon-positive, #2f7a3b); }`;

@Component({
  template: htmlCode,
  imports: [MatExpansionModule, MatIcon, MatButton],
  styles: [styleCode],
})
class SampleComponent {
  private readonly labels = [
    'Classified the question',
    'Searched regulatory guidance (US)',
    'Found 12 relevant sources',
    'Generated the answer',
  ];

  private timers: ReturnType<typeof setTimeout>[] = [];
  readonly steps = signal<Step[]>(this.labels.map((label) => ({ label, done: true })));

  constructor() {
    inject(DestroyRef).onDestroy(() => this.timers.forEach(clearTimeout));
  }

  // Re-run the "streaming" fill so the done markers appear in sequence.
  replay(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
    this.steps.set(this.labels.map((label) => ({ label, done: false })));
    this.labels.forEach((_, i) => {
      this.timers.push(
        setTimeout(() => {
          this.steps.update((s) =>
            s.map((step, j) => (j === i ? { ...step, done: true } : step)),
          );
        }, (i + 1) * 500),
      );
    });
  }
}

export const AiGenerationTrace: InputViewerComponent = {
  exampleName: 'How was this generated?',
  dynamicComponent: SampleComponent,
  height: 48,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

// A collapsed, keyboard-operable disclosure under the answer. The step list fills
// in as the answer streams (done markers); a reasoning summary shows the query,
// classification and filters. Steps must reflect what actually happened.
@Component({ /* … */ })
export class GenerationTrace {
  readonly steps = signal<{ label: string; done: boolean }[]>([]);
}`,
};
