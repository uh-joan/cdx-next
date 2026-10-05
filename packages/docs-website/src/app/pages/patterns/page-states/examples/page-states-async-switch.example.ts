import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

type Status = 'loading' | 'loaded' | 'empty' | 'error';

// One status drives the whole region with @switch, so the four states stay
// mutually exclusive. Use the toggle to see each one.
const htmlCode = `<div class="demo">
  <div class="demo__controls">
    @for (s of statuses; track s) {
      <button
        matButton="outlined"
        [class.is-active]="status() === s"
        (click)="status.set(s)"
      >
        {{ s }}
      </button>
    }
  </div>

  <div class="demo__region">
    @switch (status()) {
      @case ('loading') {
        <ngx-skeleton-loader
          count="3"
          [theme]="{ height: '20px' }"
        />
      }
      @case ('error') {
        <hlx-empty-state
          tone="error"
          heading="Couldn't load alerts"
          message="Something went wrong. Please try again."
        >
          <button hlx-empty-state-actions matButton="outlined" (click)="status.set('loading')">
            Retry
          </button>
        </hlx-empty-state>
      }
      @case ('empty') {
        <hlx-empty-state
          heading="No alerts yet"
          message="Alerts you create will appear here."
        >
          <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent">
            Create an alert
          </button>
        </hlx-empty-state>
      }
      @default {
        <ul class="list">
          <li>Guidance for substance X updated</li>
          <li>New safety signal on product Y</li>
          <li>Label change published for Z</li>
        </ul>
      }
    }
  </div>
</div>`;

const styleCode = `.demo { padding: 1rem; }
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.demo__controls .is-active { font-weight: 700; }
.demo__region {
  min-height: 160px;
  border: 1px solid var(--sys-outline-variant, #dfe1e2);
  border-radius: 2px;
  padding: 0.5rem;
}
.list { margin: 0; padding-left: 1.25rem; }
.list li { margin: 0.5rem 0; }`;

@Component({
  template: htmlCode,
  imports: [HelixEmptyStateComponent, NgxSkeletonLoaderModule, MatButton],
  styles: [styleCode],
})
class SampleComponent {
  readonly statuses: Status[] = ['loading', 'loaded', 'empty', 'error'];
  readonly status = signal<Status>('loaded');
}

export const PageStatesAsyncSwitch: InputViewerComponent = {
  exampleName: 'All four states with @switch',
  dynamicComponent: SampleComponent,
  height: 44,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';

type Status = 'loading' | 'loaded' | 'empty' | 'error';

// In a real screen the status comes from resource().status() or a store
// signal, not a hand-set signal. The @switch shape is the same.
@Component({
  selector: 'app-async-switch-example',
  templateUrl: './async-switch-example.html',
  imports: [HelixEmptyStateComponent, NgxSkeletonLoaderModule, MatButton],
})
export class AsyncSwitchExample {
  readonly status = signal<Status>('loaded');
}`,
};
