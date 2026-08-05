import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story hlx-btn-small">
  <div class="story__box">
    <div class="story__row">
      <button matButton="filled">Button</button>
      <button matButton="filled">
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton="filled">
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row">
      <button class="hlx-btn-accent" matButton="filled">Button</button>
      <button class="hlx-btn-accent" matButton="filled">
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button class="hlx-btn-accent" matButton="filled">
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row">
      <button class="hlx-btn-negative" matButton="filled">Button</button>
      <button class="hlx-btn-negative" matButton="filled">
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button class="hlx-btn-negative" matButton="filled">
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matButton="filled">Button</button>
      <button matButton="filled">
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton="filled">
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
  </div>
</div>
`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.story__box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;
}

.background-invert {
  background-color: var(--mat-sys-inverse-surface);
}`;

@Component({
  template: htmlCode,
  imports: [MatButtonModule, MatIconModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsSmallSizeComponent: InputViewerComponent = {
  exampleName: 'Buttons Small Size',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: htmlCode,
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
