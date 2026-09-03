import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matFab aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-accent">
      <button matFab aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matFab aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matFab aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matFab disabled aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-accent">
      <button matFab disabled aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matFab disabled aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matFab disabled aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
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
  align-items: center;
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
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-fab-example',
  templateUrl: './buttons-fab-example.html',
  styleUrl: './buttons-fab-example.scss',
  imports: [MatFabButton, MatIcon],
})
export class ButtonsFabExample {}`;

@Component({
  template: htmlCode,
  imports: [MatFabButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsFabComponent: InputViewerComponent = {
  exampleName: 'Buttons Fab',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
