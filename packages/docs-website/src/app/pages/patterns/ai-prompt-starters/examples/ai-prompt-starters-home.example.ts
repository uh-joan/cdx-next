import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="home">
  <div class="home__greeting">
    <hlx-ai-avatar label="AI assistant" />
    <h1 class="home__title hlx-gradient-ai">How can I help with your research?</h1>
    <p class="home__sub">Ask a question, or start with one of these.</p>
  </div>

  <div class="home__starters">
    @for (s of starters; track s) {
      <button class="home__starter" (click)="useStarter(s)">
        <mat-icon aria-hidden="true">auto_awesome</mat-icon>
        <span>{{ s }}</span>
      </button>
    }
  </div>

  <form class="home__composer" (submit)="$event.preventDefault()">
    <mat-form-field class="home__field" appearance="outline" subscriptSizing="dynamic">
      <textarea #composer matInput rows="1" placeholder="Ask about regulatory requirements"
        [value]="draft()" (input)="draft.set($any($event.target).value)"></textarea>
    </mat-form-field>
    <button matIconButton class="hlx-btn-ai" type="submit" aria-label="Send" [disabled]="!draft().trim()">
      <mat-icon>arrow_upward</mat-icon>
    </button>
  </form>
</div>`;

const styleCode = `.home {
  display: flex;
  flex-direction: column;
  gap: var(--hlx-spacing-3, 24px);
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}
.home__greeting { display: flex; flex-direction: column; align-items: center; gap: var(--hlx-spacing-1, 8px); }
.home__title {
  margin: 0;
  font: var(--sys-headline-large, 600 32px/40px 'Source Sans 3', sans-serif);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  width: fit-content;
}
.home__sub { margin: 0; color: var(--hlx-text-secondary, #59676b); }
.home__starters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--hlx-spacing-2, 16px);
  text-align: left;
}
.home__starter {
  display: flex;
  gap: var(--hlx-spacing-1, 8px);
  align-items: flex-start;
  padding: var(--hlx-spacing-2, 16px);
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
  background: var(--hlx-surface-primary, #fff);
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.home__starter:hover { background: var(--hlx-surface-minimal, #f1f3f4); }
.home__starter mat-icon { color: var(--hlx-icon-accent, #5e33bf); flex-shrink: 0; }
.home__composer { display: flex; gap: var(--hlx-spacing-1, 8px); align-items: flex-end; }
.home__field { flex: 1; }`;

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
  private readonly composer = viewChild<ElementRef<HTMLTextAreaElement>>('composer');

  readonly draft = signal('');
  readonly starters = [
    'Summarise the latest regulatory changes for pembrolizumab',
    'Compare the last two FDA labels for this drug',
    'Which trials for this target changed phase this quarter?',
    'Draft an alert for new safety signals in oncology',
  ];

  useStarter(prompt: string): void {
    // Seed the composer (editable) and focus — never send on click.
    this.draft.set(prompt);
    this.composer()?.nativeElement.focus();
  }
}

export const AiPromptStartersHome: InputViewerComponent = {
  exampleName: 'Assistant home with starters',
  dynamicComponent: SampleComponent,
  height: 54,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { HelixAiAvatarComponent } from '@hlx/ngx-branding';
// + Material form-field, input, button, icon

// A starter card seeds the composer (editable) and focuses it — it never sends on
// click, keeping the user in control. Reuses the conversation's composer.
@Component({ /* … */ })
export class AssistantHome {
  private readonly composer = viewChild<ElementRef<HTMLTextAreaElement>>('composer');
  readonly draft = signal('');
  useStarter(prompt: string): void {
    this.draft.set(prompt);
    this.composer()?.nativeElement.focus();
  }
}`,
};
