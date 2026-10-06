import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { HelixNotificationComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Scenario = 'normal' | 'context' | 'blocked';

const htmlCode = `<div class="demo">
  <div class="demo__switch">
    @for (s of scenarios; track s) {
      <button matButton [class.is-active]="scenario() === s" (click)="scenario.set(s)">{{ s }}</button>
    }
  </div>

  <div class="limits">
    @if (scenario() === 'context') {
      <hlx-notification severity="warn" title="This conversation is getting long"
        action="Start a new chat">
        Start a new chat to keep answers accurate.
      </hlx-notification>
    }
    @if (scenario() === 'blocked') {
      <hlx-notification severity="negative" title="You've used today's AI responses">
        Your responses reset at midnight UTC. You can still read this conversation.
      </hlx-notification>
    }

    <form class="limits__composer">
      <mat-form-field class="limits__field" appearance="outline" subscriptSizing="dynamic">
        <textarea matInput rows="1" placeholder="Ask a question" [disabled]="blocked()"></textarea>
      </mat-form-field>
      <button matIconButton class="hlx-btn-ai" aria-label="Send" [disabled]="blocked()">
        <mat-icon>arrow_upward</mat-icon>
      </button>
    </form>

    <p class="limits__quota">{{ quotaLabel() }}</p>
  </div>
</div>`;

const styleCode = `.demo { padding: 1rem; }
.demo__switch { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.demo__switch .is-active { font-weight: 700; }
.limits { display: flex; flex-direction: column; gap: var(--hlx-spacing-2, 16px); max-width: 560px; }
.limits__composer { display: flex; gap: 0.5rem; align-items: flex-end; }
.limits__field { flex: 1; }
.limits__quota {
  margin: 0;
  text-align: right;
  color: var(--hlx-text-secondary, #59676b);
  font: var(--sys-body-small, 400 13px/16px 'Source Sans 3', sans-serif);
}`;

@Component({
  template: htmlCode,
  imports: [
    HelixNotificationComponent,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatInput,
    MatIcon,
  ],
  styles: [styleCode],
})
class SampleComponent {
  readonly scenarios: Scenario[] = ['normal', 'context', 'blocked'];
  readonly scenario = signal<Scenario>('normal');

  readonly blocked = computed(() => this.scenario() === 'blocked');
  readonly quotaLabel = computed(() =>
    this.blocked() ? '0 of 10 responses left today' : '8 of 10 responses left today',
  );
}

export const AiUsageLimits: InputViewerComponent = {
  exampleName: 'AI usage & limit states',
  dynamicComponent: SampleComponent,
  height: 40,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, signal } from '@angular/core';
import { HelixNotificationComponent } from '@cdx/ngx-branding';
// + Material form-field, input, button, icon

// Show remaining quota quietly; a warn banner when the context is too long (→ new
// chat); a negative banner when blocked, with the composer disabled. Limits use
// hlx-notification, not a red error toast.
@Component({ /* … */ })
export class AssistantLimits {
  readonly blocked = computed(() => /* quota === 0 */ false);
}`,
};
