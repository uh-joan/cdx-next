import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story hlx-density--2">
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
  background-color: #2a2b2d; /* Helix surface/invert */
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

// The Helix density class (hlx-density--2) goes on the container, not on each button.
@Component({
  selector: 'app-buttons-xsmall-example',
  templateUrl: './buttons-xsmall-example.html',
  styleUrl: './buttons-xsmall-example.scss',
  imports: [MatButton, MatIcon],
})
export class ButtonsXSmallExample {}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsXSmallSizeComponent: InputViewerComponent = {
  exampleName: 'Buttons XSmall Size',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
