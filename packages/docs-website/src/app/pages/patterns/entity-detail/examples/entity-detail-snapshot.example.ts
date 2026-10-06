import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type SectionState = 'idle' | 'loading' | 'loaded';

const htmlCode = `<article class="snapshot">
  <header class="snapshot__header">
    <div>
      <p class="snapshot__type">Drug</p>
      <h1 class="snapshot__name">Pembrolizumab</h1>
      <p class="snapshot__meta">Merck · Anti-PD-1 · Oncology</p>
    </div>
    <button matButton="filled" class="hlx-btn-accent">Create alert</button>
  </header>

  <mat-card class="snapshot__summary" appearance="outlined">
    <mat-card-content class="snapshot__facts">
      <div><dt>Highest phase</dt><dd>Phase III</dd></div>
      <div><dt>First approval</dt><dd>2014</dd></div>
      <div><dt>Active trials</dt><dd>128</dd></div>
      <div><dt>Last update</dt><dd>2 Oct 2026</dd></div>
    </mat-card-content>
  </mat-card>

  <mat-accordion class="snapshot__sections" multi>
    @for (s of sections; track s.key) {
      <mat-expansion-panel [disabled]="s.count === 0" (opened)="open(s.key)">
        <mat-expansion-panel-header>
          <mat-panel-title>{{ s.title }}</mat-panel-title>
          <mat-panel-description>{{ s.count || 'None' }}</mat-panel-description>
        </mat-expansion-panel-header>

        @switch (state()[s.key]) {
          @case ('loading') {
            <ngx-skeleton-loader count="3" [theme]="{ height: '18px' }" />
          }
          @default {
            <p class="snapshot__loaded">
              Showing the most recent of {{ s.count }} {{ s.title.toLowerCase() }}.
            </p>
          }
        }
      </mat-expansion-panel>
    }
  </mat-accordion>
</article>`;

const styleCode = `.snapshot { padding: 1rem; display: flex; flex-direction: column; gap: var(--hlx-spacing-3, 24px); }
.snapshot__header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
.snapshot__type { margin: 0; color: var(--hlx-text-secondary, #59676b); font: var(--sys-label-large, 600 14px/20px 'Source Sans 3', sans-serif); }
.snapshot__name { margin: 0; font: var(--sys-headline-large, 600 32px/40px 'Source Sans 3', sans-serif); }
.snapshot__meta { margin: 0.25rem 0 0; color: var(--hlx-text-secondary, #59676b); }
.snapshot__facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--hlx-spacing-2, 16px); }
.snapshot__facts dt { margin: 0; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }
.snapshot__facts dd { margin: 2px 0 0; font-weight: 600; }
.snapshot__list { margin: 0; padding-left: 1.25rem; }
.snapshot__list li { margin: 0.25rem 0; }`;

@Component({
  template: htmlCode,
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatButton,
    NgxSkeletonLoaderModule,
  ],
  styles: [styleCode],
})
class SampleComponent {
  readonly sections = [
    { key: 'trials', title: 'Clinical trials', count: 128 },
    { key: 'regulatory', title: 'Regulatory history', count: 34 },
    { key: 'safety', title: 'Safety signals', count: 0 },
  ];

  // Each section loads on first open (idle → loading → loaded).
  readonly state = signal<Record<string, SectionState>>({});

  open(key: string): void {
    if (this.state()[key]) return;
    this.state.update((s) => ({ ...s, [key]: 'loading' }));
    setTimeout(() => {
      this.state.update((s) => ({ ...s, [key]: 'loaded' }));
    }, 700);
  }
}

export const EntityDetailSnapshot: InputViewerComponent = {
  exampleName: 'Entity snapshot',
  dynamicComponent: SampleComponent,
  height: 56,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
// + Material card, expansion, ngx-skeleton-loader, HelixEmptyStateComponent

// Header + summary card + an accordion whose sections load on first open and are
// disabled when empty. Each panel shows its own Page states inside.
@Component({ /* … */ })
export class DrugSnapshot {
  readonly state = signal<Record<string, 'idle' | 'loading' | 'loaded'>>({});
  open(key: string): void { /* lazy-load this section */ }
}`,
};
