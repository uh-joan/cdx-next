import { Component, computed, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

interface SourceDoc {
  order: number;
  title: string;
  source: string;
  territory: string;
  updated: string;
  url: string;
}

const DOCS: SourceDoc[] = [
  { order: 1, title: 'FDA Guidance — Phase III oncology trials (2026)', source: 'FDA', territory: 'United States', updated: '2 Oct 2026', url: '#' },
  { order: 2, title: 'ICH E9(R1) Addendum on Estimands', source: 'ICH', territory: 'International', updated: '2019', url: '#' },
  { order: 3, title: 'PMDA Notification 0531-1', source: 'PMDA', territory: 'Japan', updated: '2025', url: '#' },
  { order: 4, title: 'EMA Scientific Advice Q&A', source: 'EMA', territory: 'European Union', updated: '2024', url: '#' },
  { order: 5, title: 'Breakthrough Therapy Guidance', source: 'FDA', territory: 'United States', updated: '2023', url: '#' },
  { order: 6, title: 'Rolling Review Procedures', source: 'FDA', territory: 'United States', updated: '2022', url: '#' },
];

const htmlCode = `<article class="ans">
  <p class="ans__text">
    The FDA expects the Phase III pivotal design and primary endpoint to be agreed at
    the End-of-Phase-II meeting<span class="cite">
      <button class="cite__chip" aria-haspopup="true" aria-label="Source 1">1</button>
      <span class="cite__pop" role="tooltip">
        <span class="cite__label">Source</span>
        <span class="cite__snippet">"…the Agency expects sponsors to reach agreement on the pivotal trial design and primary endpoint at the End-of-Phase-II meeting."</span>
        <a class="hlx-link-inline" href="#">FDA Guidance — Phase III oncology trials, p.12</a>
      </span>
    </span>. A rolling BLA is available for breakthrough-designated programmes<span class="cite">
      <button class="cite__chip" aria-haspopup="true" aria-label="Source 2">2</button>
      <span class="cite__pop" role="tooltip">
        <span class="cite__label">Source</span>
        <span class="cite__snippet">{{ translated() ? '"A rolling submission allows a breakthrough-designated program to submit completed sections of the application for review before the full submission."' : '画期的治療薬に指定されたプログラムは、申請全体の提出前に完成したセクションを提出できます。' }}</span>
        <span class="cite__translate">
          @if (translated()) {
            <span class="cite__ai">AI translation</span>
            <button class="cite__link-btn" (click)="translated.set(false)">See original</button>
          } @else {
            <button class="cite__link-btn" (click)="translated.set(true)">Translate</button>
          }
        </span>
        <a class="hlx-link-inline" href="#">PMDA Notification 0531-1, §4</a>
      </span>
    </span>.
  </p>

  <div class="src">
    <p class="src__head">Source documents</p>
    <ol class="src__list">
      @for (d of visibleSources(); track d.order) {
        <li class="src__item">
          <span class="src__order">{{ d.order }}</span>
          <span class="src__body">
            <a class="hlx-link-inline src__title" href="#">{{ d.title }}</a>
            <span class="src__meta">{{ d.source }} · {{ d.territory }} · Updated {{ d.updated }}</span>
          </span>
        </li>
      }
    </ol>
    @if (hiddenCount() > 0) {
      <button matButton type="button" (click)="expanded.set(!expanded())">
        <mat-icon>{{ expanded() ? 'expand_less' : 'expand_more' }}</mat-icon>
        {{ expanded() ? 'Show less' : 'Show ' + hiddenCount() + ' more sources' }}
      </button>
    }
  </div>
</article>`;

const styleCode = `.ans { max-width: 600px; margin: 1rem; }
.ans__text { line-height: 1.6; }

.cite { position: relative; }
.cite__chip {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 18px; height: 18px; padding: 0 4px; margin: 0 1px;
  vertical-align: super; font-size: 11px; font-weight: 600; line-height: 1;
  cursor: pointer; border: 0; border-radius: 9px;
  color: #fff; background: var(--hlx-icon-accent, #5e33bf);
}
.cite__chip:focus-visible { outline: 2px solid var(--hlx-border-focus, #176fe5); outline-offset: 2px; }
.cite__pop {
  visibility: hidden; opacity: 0; transition: opacity 0.12s;
  position: absolute; left: 0; top: 140%; z-index: 5; width: 280px;
  display: flex; flex-direction: column; gap: 6px;
  padding: var(--hlx-spacing-2, 16px);
  font-size: 13px; line-height: 1.45; text-align: left;
  color: var(--hlx-text-primary, #1a1a1a);
  background: var(--hlx-surface-primary, #fff);
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
  box-shadow: var(--hlx-elevation-md, 0 4px 12px rgba(0,0,0,0.12));
}
.cite:hover .cite__pop, .cite:focus-within .cite__pop { visibility: visible; opacity: 1; }
.cite__label { font-weight: 600; color: var(--hlx-text-secondary, #59676b); }
.cite__snippet { color: var(--hlx-text-secondary, #59676b); }
.cite__translate { display: flex; align-items: center; gap: 0.5rem; }
.cite__ai { font-size: 12px; color: var(--hlx-icon-accent, #5e33bf); font-weight: 600; }
.cite__link-btn { border: 0; background: none; padding: 0; cursor: pointer; color: var(--hlx-link, #176fe5); font: inherit; }

.src { margin-top: var(--hlx-spacing-3, 24px); padding-top: var(--hlx-spacing-2, 16px); border-top: 1px solid var(--hlx-border-secondary, #dfe1e2); }
.src__head { margin: 0 0 var(--hlx-spacing-2, 16px); font-weight: 600; }
.src__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--hlx-spacing-2, 16px); }
.src__item { display: flex; gap: 0.75rem; }
.src__order {
  flex: 0 0 auto; width: 22px; height: 22px; border-radius: 11px;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600;
  color: var(--hlx-text-secondary, #59676b); background: var(--hlx-surface-minimal, #f1f3f4);
}
.src__body { display: flex; flex-direction: column; min-width: 0; }
.src__title { font-weight: 600; }
.src__meta { color: var(--hlx-text-secondary, #59676b); font-size: 13px; }`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {
  readonly expanded = signal(false);
  readonly translated = signal(false);

  private readonly previewLimit = 3;
  readonly sources = signal<SourceDoc[]>(DOCS);

  readonly visibleSources = computed(() =>
    this.expanded() ? this.sources() : this.sources().slice(0, this.previewLimit),
  );
  readonly hiddenCount = computed(() =>
    Math.max(0, this.sources().length - this.previewLimit),
  );
}

export const AiSourcesCitations: InputViewerComponent = {
  exampleName: 'Inline citations & ranked sources',
  dynamicComponent: SampleComponent,
  height: 58,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, signal } from '@angular/core';
// + Material button, icon

// Inline citation chips reveal the cited passage + a source link on hover AND focus
// (aria-haspopup); an off-language source offers an AI translation with "See original".
// The ranked source list shows a few and collapses the rest (preview 5 / threshold 6
// in reg-ai).
@Component({ /* … */ })
export class AiSources {
  readonly sources = signal<SourceDoc[]>([]);
  readonly visibleSources = computed(() => /* slice to preview unless expanded */ []);
  readonly hiddenCount = computed(() => Math.max(0, this.sources().length - 5));
}`,
};
