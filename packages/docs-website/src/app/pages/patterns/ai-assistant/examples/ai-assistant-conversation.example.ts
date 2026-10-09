import {
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Rating = 'up' | 'down' | null;
interface Turn {
  readonly id: number;
  readonly role: 'user' | 'assistant';
  text: string;
  generating?: boolean;
  status?: string;
  rating?: Rating;
}

const ANSWER =
  'For a Phase III oncology candidate, the FDA typically expects the ' +
  'pivotal trial design, the primary efficacy endpoint and the safety ' +
  'database size to be agreed at the End-of-Phase-II meeting before the ' +
  'trial begins. You can confirm the current guidance in the linked sources.';

const htmlCode = `<div class="chat">
  <ol class="chat__thread" role="log" aria-label="Conversation">
    @for (turn of turns(); track turn.id) {
      <li class="chat__turn chat__turn--{{ turn.role }}">
        @if (turn.role === 'user') {
          <div class="chat__bubble">{{ turn.text }}</div>
        } @else {
          <hlx-ai-avatar [animated]="turn.generating ?? false" label="AI assistant" />
          <div class="chat__answer" aria-live="polite">
            @if (turn.generating && !turn.text) {
              <p class="chat__status">{{ turn.status }}</p>
            }
            @if (turn.text) {
              <p class="chat__text">{{ turn.text }}</p>
            }
            @if (!turn.generating) {
              <div class="chat__actions">
                <button matIconButton aria-label="Good answer"
                  [attr.aria-pressed]="turn.rating === 'up'" (click)="rate(turn, 'up')">
                  <mat-icon>thumb_up</mat-icon>
                </button>
                <button matIconButton aria-label="Bad answer"
                  [attr.aria-pressed]="turn.rating === 'down'" (click)="rate(turn, 'down')">
                  <mat-icon>thumb_down</mat-icon>
                </button>
                <button matIconButton aria-label="Copy answer" (click)="copy(turn)">
                  <mat-icon>content_copy</mat-icon>
                </button>
              </div>
            }
          </div>
        }
      </li>
    }
  </ol>

  <form class="chat__composer" (submit)="send(); $event.preventDefault()">
    <mat-form-field class="chat__field" appearance="outline" subscriptSizing="dynamic">
      <textarea matInput rows="1" placeholder="Ask about regulatory requirements"
        [value]="draft()" [disabled]="generating()"
        (input)="draft.set($any($event.target).value)"
        (keydown.enter)="onEnter($event)"></textarea>
    </mat-form-field>
    <button matFab class="hlx-btn-ai" type="submit"
      aria-label="Send" [disabled]="generating() || !draft().trim()">
      <mat-icon>arrow_upward</mat-icon>
    </button>
  </form>
  <p class="chat__disclosure">Answers are AI-generated and may be incomplete. Check the sources.</p>
</div>`;

const styleCode = `.chat {
  display: flex;
  flex-direction: column;
  gap: var(--hlx-spacing-2, 16px);
  max-width: 680px;
  margin: 0 auto;
  padding: 1rem;
}
.chat__thread {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--hlx-spacing-3, 24px);
  min-height: 220px;
}
.chat__turn { display: flex; gap: var(--hlx-spacing-2, 16px); }
.chat__turn--user { justify-content: flex-end; }
.chat__bubble {
  background: var(--hlx-surface-minimal, #f1f3f4);
  border-radius: var(--hlx-border-radius-default, 2px);
  padding: var(--hlx-spacing-2, 16px);
  max-width: 80%;
}
.chat__answer { flex: 1; min-width: 0; }
.chat__status { color: var(--hlx-text-secondary, #59676b); margin: 0.25rem 0; }
.chat__text { margin: 0.25rem 0; }
.chat__actions { display: flex; gap: 4px; margin-top: 0.25rem; }
.chat__composer { display: flex; gap: var(--hlx-spacing-1, 8px); align-items: flex-end; }
.chat__field { flex: 1; }
.chat__disclosure {
  text-align: center;
  color: var(--hlx-text-secondary, #59676b);
  font: var(--sys-body-small, 400 13px/16px 'Source Sans 3', sans-serif);
  margin: 0;
}`;

@Component({
  template: htmlCode,
  imports: [
    HelixAiAvatarComponent,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatInput,
    MatIcon,
  ],
  styles: [styleCode],
})
class SampleComponent {
  private readonly destroyRef = inject(DestroyRef);
  private nextId = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];

  readonly turns = signal<Turn[]>([
    {
      id: this.nextId++,
      role: 'assistant',
      text: 'Hi — ask me about regulatory requirements for your programme.',
    },
  ]);
  readonly draft = signal('');
  readonly generating = computed(() => this.turns().some((t) => t.generating));

  constructor() {
    this.destroyRef.onDestroy(() => this.timers.forEach(clearTimeout));
  }

  onEnter(event: Event): void {
    const e = event as KeyboardEvent;
    if (e.shiftKey) return; // newline
    e.preventDefault();
    this.send();
  }

  send(): void {
    const text = this.draft().trim();
    if (!text || this.generating()) return;
    this.draft.set('');

    this.append({ id: this.nextId++, role: 'user', text });
    const assistant: Turn = {
      id: this.nextId++,
      role: 'assistant',
      text: '',
      generating: true,
      status: 'Thinking…',
      rating: null,
    };
    this.append(assistant);
    this.stream(assistant.id);
  }

  private stream(id: number): void {
    this.timers.push(
      setTimeout(() => this.patch(id, { status: 'Generating answer…' }), 500),
    );
    const words = ANSWER.split(' ');
    let i = 0;
    const tick = (): void => {
      if (i >= words.length) {
        this.patch(id, { generating: false });
        return;
      }
      const text = words.slice(0, ++i).join(' ');
      this.patch(id, { text });
      this.timers.push(setTimeout(tick, 45));
    };
    this.timers.push(setTimeout(tick, 900));
  }

  rate(turn: Turn, rating: Rating): void {
    this.patch(turn.id, { rating: turn.rating === rating ? null : rating });
  }

  copy(turn: Turn): void {
    navigator.clipboard?.writeText(turn.text).catch(() => {
      /* clipboard may be blocked; selection is the fallback */
    });
  }

  private append(turn: Turn): void {
    this.turns.update((t) => [...t, turn]);
  }

  private patch(id: number, update: Partial<Turn>): void {
    this.turns.update((turns) =>
      turns.map((t) => (t.id === id ? { ...t, ...update } : t)),
    );
  }
}

export const AiAssistantConversation: InputViewerComponent = {
  exampleName: 'Assistant conversation',
  dynamicComponent: SampleComponent,
  height: 62,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, inject, DestroyRef, signal } from '@angular/core';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';
// + Material form-field, input, button, icon

// The streamed answer and status live in an aria-live="polite" region so screen
// readers hear the response as it arrives. In a real app the words come from the
// server stream; here they are simulated. Feedback buttons use aria-pressed.
@Component({ /* … */ })
export class AssistantConversation {
  readonly turns = signal<Turn[]>([]);
  readonly draft = signal('');
  readonly generating = computed(() => this.turns().some((t) => t.generating));
}`,
};
