import { Component, computed, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Code = '404' | '403' | '500';

const CONTENT: Record<Code, { heading: string; message: string; action: string }> = {
  '404': {
    heading: 'Page not found',
    message: "We couldn't find that page. It may have moved or no longer exist.",
    action: 'Go to home',
  },
  '403': {
    heading: "You don't have access",
    message: 'Your account cannot view this page. Request access or go back.',
    action: 'Request access',
  },
  '500': {
    heading: 'Something went wrong',
    message: 'An error occurred on our side. Please try again in a moment.',
    action: 'Retry',
  },
};

const htmlCode = `<div class="demo">
  <div class="demo__switch">
    @for (c of codes; track c) {
      <button matButton [class.is-active]="code() === c" (click)="code.set(c)">{{ c }}</button>
    }
  </div>

  <div class="error-page">
    <hlx-empty-state tone="error" [heading]="current().heading" [message]="current().message">
      <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent">
        {{ current().action }}
      </button>
    </hlx-empty-state>
  </div>
</div>`;

const styleCode = `.demo { padding: 1rem; }
.demo__switch { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.demo__switch .is-active { font-weight: 700; }
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  border: 1px solid var(--hlx-border-secondary, #dfe1e2);
  border-radius: var(--hlx-border-radius-default, 2px);
}`;

@Component({
  template: htmlCode,
  imports: [HelixEmptyStateComponent, MatButton],
  styles: [styleCode],
})
class SampleComponent {
  readonly codes: Code[] = ['404', '403', '500'];
  readonly code = signal<Code>('404');
  readonly current = computed(() => CONTENT[this.code()]);
}

export const ErrorPagesStates: InputViewerComponent = {
  exampleName: 'Error pages (404 / 403 / 500)',
  dynamicComponent: SampleComponent,
  height: 40,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HelixEmptyStateComponent } from '@hlx/ngx-branding';
import { MatButton } from '@angular/material/button';

// Each error route renders one of these — hlx-empty-state centred in the content
// area, with one action that fits the error. Served from the router inside the
// app shell (404 wildcard, 403 guard redirect, 500 ErrorHandler).
@Component({
  selector: 'app-not-found',
  imports: [HelixEmptyStateComponent, MatButton],
  template: \`
    <div class="error-page">
      <hlx-empty-state tone="error" heading="Page not found"
        message="We couldn't find that page. It may have moved or no longer exist.">
        <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" routerLink="/">
          Go to home
        </button>
      </hlx-empty-state>
    </div>\`,
})
export class NotFoundPage {}`,
};
