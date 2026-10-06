import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type View = 'loaded' | 'loading' | 'empty';
interface Conversation {
  id: string;
  title: string;
  group: 'Today' | 'Last 7 days' | 'Older';
}

const SEED: Conversation[] = [
  { id: 'c1', title: 'FDA Phase III endpoint requirements', group: 'Today' },
  { id: 'c2', title: 'Pembrolizumab regulatory timeline', group: 'Today' },
  { id: 'c3', title: 'Compare EMA vs FDA pivotal guidance', group: 'Last 7 days' },
  { id: 'c4', title: 'Breakthrough therapy criteria', group: 'Last 7 days' },
  { id: 'c5', title: 'Orphan drug designation process', group: 'Older' },
];

const GROUP_ORDER: Conversation['group'][] = ['Today', 'Last 7 days', 'Older'];

const htmlCode = `<div class="hist">
  <!-- Demo-only: flip between the list states -->
  <div class="hist__states">
    @for (v of views; track v) {
      <button matButton [class.on]="view() === v" (click)="view.set(v)">{{ v }}</button>
    }
  </div>

  <div class="hist__panel">
    <header class="hist__head">
      <h3>History</h3>
      <span class="hist__head-actions">
        <button matIconButton aria-label="New chat" matTooltip="New chat"><mat-icon>add</mat-icon></button>
        <button matIconButton aria-label="Close history"><mat-icon>close</mat-icon></button>
      </span>
    </header>

    @switch (view()) {
      @case ('loading') {
        <div class="hist__loading">
          @for (n of [1,2,3,4,5]; track n) {
            <ngx-skeleton-loader animation="progress" [theme]="{ 'height.px': 16, 'margin-bottom.px': 12 }" />
          }
        </div>
      }
      @case ('empty') {
        <div class="hist__empty">
          <mat-icon>forum</mat-icon>
          <p>No conversations yet</p>
          <p class="hist__empty-hint">Ask the assistant a question to start one.</p>
        </div>
      }
      @default {
        <div class="hist__list">
          @for (group of grouped(); track group.key) {
            <section class="hist__group">
              <h4 class="hist__group-title">{{ group.key }}</h4>
              @for (c of group.items; track c.id) {
                <div class="entry" [class.entry--active]="activeId() === c.id">
                  @if (editingId() === c.id) {
                    <input class="entry__edit" [value]="c.title" #box
                      (keydown.enter)="saveRename(c, box.value)" (keydown.escape)="editingId.set(null)" />
                    <button matIconButton aria-label="Save" (click)="saveRename(c, box.value)"><mat-icon>check</mat-icon></button>
                    <button matIconButton aria-label="Cancel" (click)="editingId.set(null)"><mat-icon>close</mat-icon></button>
                  } @else if (confirmingId() === c.id) {
                    <span class="entry__confirm">Delete this chat?</span>
                    <button matButton class="hlx-btn-negative" (click)="remove(c)">Delete</button>
                    <button matButton (click)="confirmingId.set(null)">Cancel</button>
                  } @else {
                    <button matButton class="entry__open" [matTooltip]="c.title" (click)="activeId.set(c.id)">
                      <span class="entry__title">{{ c.title }}</span>
                    </button>
                    <button matIconButton class="entry__more" aria-label="Conversation actions" [matMenuTriggerFor]="menu">
                      <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                      <button mat-menu-item (click)="startRename(c)"><mat-icon>edit</mat-icon> Rename</button>
                      <button mat-menu-item (click)="confirmingId.set(c.id)"><mat-icon>delete</mat-icon> Delete</button>
                    </mat-menu>
                  }
                </div>
              }
            </section>
          }
        </div>
      }
    }
  </div>
</div>`;

const styleCode = `.hist { margin: 1rem; max-width: 360px; }
.hist__states { display: flex; gap: 0.25rem; margin-bottom: 0.75rem; }
.hist__states .on { background: var(--hlx-surface-minimal, #f1f3f4); font-weight: 600; }
.hist__panel { border: 1px solid var(--hlx-border-secondary, #dfe1e2); border-radius: var(--hlx-border-radius-default, 2px); overflow: hidden; }
.hist__head { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.5rem 0.5rem 1rem; border-bottom: 1px solid var(--hlx-border-secondary, #dfe1e2); }
.hist__head h3 { margin: 0; font: var(--sys-title-medium, 600 16px/24px 'Source Sans 3', sans-serif); }

.hist__loading { padding: 1rem; }
.hist__empty { padding: 2rem 1rem; text-align: center; color: var(--hlx-text-secondary, #59676b); }
.hist__empty mat-icon { width: 40px; height: 40px; font-size: 40px; color: var(--hlx-icon-secondary, #8a9699); }
.hist__empty p { margin: 0.5rem 0 0; }
.hist__empty-hint { font-size: 13px; }

.hist__list { padding: 0.5rem; max-height: 320px; overflow-y: auto; }
.hist__group + .hist__group { margin-top: var(--hlx-spacing-2, 16px); }
.hist__group-title { margin: 0.25rem 0.5rem; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--hlx-text-secondary, #59676b); }

.entry { display: flex; align-items: center; gap: 0.25rem; border-radius: var(--hlx-border-radius-default, 2px); }
.entry:hover, .entry:focus-within { background: var(--hlx-surface-minimal, #f1f3f4); }
.entry--active { background: var(--hlx-surface-minimal, #f1f3f4); box-shadow: inset 2px 0 0 var(--hlx-icon-accent, #5e33bf); }
.entry__open { flex: 1 1 auto; min-width: 0; justify-content: flex-start; }
.entry__title { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; }
.entry__more { opacity: 0; flex: 0 0 auto; }
.entry:hover .entry__more, .entry:focus-within .entry__more { opacity: 1; }
.entry__edit { flex: 1 1 auto; min-width: 0; padding: 6px 8px; font: inherit; border: 1px solid var(--hlx-border-focus, #176fe5); border-radius: var(--hlx-border-radius-default, 2px); }
.entry__confirm { flex: 1 1 auto; padding-left: 0.5rem; font-size: 13px; color: var(--hlx-text-secondary, #59676b); }`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIconButton, MatIcon, MatMenuModule, NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {
  readonly views: View[] = ['loaded', 'loading', 'empty'];
  readonly view = signal<View>('loaded');

  readonly conversations = signal<Conversation[]>(SEED);
  readonly activeId = signal<string | null>('c2');
  readonly editingId = signal<string | null>(null);
  readonly confirmingId = signal<string | null>(null);

  // Group by recency, preserving Today → Last 7 days → Older.
  readonly grouped = computed(() => {
    const list = this.conversations();
    return GROUP_ORDER.map((key) => ({
      key,
      items: list.filter((c) => c.group === key),
    })).filter((g) => g.items.length > 0);
  });

  startRename(c: Conversation): void {
    this.confirmingId.set(null);
    this.editingId.set(c.id);
  }

  saveRename(c: Conversation, title: string): void {
    const next = title.trim();
    if (next) {
      this.conversations.update((list) =>
        list.map((x) => (x.id === c.id ? { ...x, title: next } : x)),
      );
    }
    this.editingId.set(null);
  }

  remove(c: Conversation): void {
    this.conversations.update((list) => list.filter((x) => x.id !== c.id));
    if (this.activeId() === c.id) this.activeId.set(null);
    this.confirmingId.set(null);
  }
}

export const AiChatHistoryPanel: InputViewerComponent = {
  exampleName: 'History panel',
  dynamicComponent: SampleComponent,
  height: 52,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, signal } from '@angular/core';
// + Material button, icon, menu, ngx-skeleton-loader

// Conversations grouped by recency, titled by their first question. Hover/focus an
// entry to rename or delete (delete confirms); the active one is highlighted. The
// panel renders loading (skeletons), empty and error states too — not just loaded.
@Component({ /* … */ })
export class AiChatHistory {
  readonly conversations = signal<Conversation[]>([]);
  readonly grouped = computed(() => /* Today / Last 7 days / Older */ []);
  saveRename(c: Conversation, title: string): void { /* update title */ }
  remove(c: Conversation): void { /* delete after confirm */ }
}`,
};
