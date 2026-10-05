import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story hlx-density--3">
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

    <div class="story__row hlx-btn-accent">
      <button matButton="filled">Button</button>
      <button matButton="outlined">Button</button>
      <button matButton>Button</button>
    </div>

    <div class="story__row hlx-btn-negative">
      <button matButton="filled">Button</button>
      <button matButton="outlined">Button</button>
      <button matButton>Button</button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matButton="filled">Button</button>
      <button matButton="outlined">Button</button>
      <button matButton>Button</button>
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

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

// hlx-density--3 is the most compact button size in Helix (28px).
@Component({
  selector: 'app-buttons-xxsmall-example',
  templateUrl: './buttons-xxsmall-example.html',
  styleUrl: './buttons-xxsmall-example.scss',
  imports: [MatButton, MatIcon],
})
export class ButtonsXXSmallExample {}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsXXSmallSizeComponent: InputViewerComponent = {
  exampleName: 'Buttons XXSmall Size',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
