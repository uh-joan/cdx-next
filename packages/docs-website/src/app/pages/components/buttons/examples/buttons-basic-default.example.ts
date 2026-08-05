import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row ">
      <button matButton>Button</button>
      <button matButton>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-accent">
      <button matButton>Button</button>
      <button matButton>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matButton>Button</button>
      <button matButton>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matButton>Button</button>
      <button matButton>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matButton disabled>Button</button>
      <button matButton disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button matButton disabled>Button</button>
      <button matButton disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matButton disabled>Button</button>
      <button matButton disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matButton disabled>Button</button>
      <button matButton disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button matButton disabled>
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

export const ButtonsBasicdDefaultComponent: InputViewerComponent = {
  exampleName: 'Buttons Basic Default',
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
