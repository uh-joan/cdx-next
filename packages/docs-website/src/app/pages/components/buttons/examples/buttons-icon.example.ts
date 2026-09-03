import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matIconButton aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
      <button matIconButton aria-label="Favorite">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="More options">
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button matIconButton aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
      <button matIconButton aria-label="Favorite">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="More options">
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-negative">
      <button matIconButton aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
      <button matIconButton aria-label="Favorite">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="More options">
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matIconButton aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
      <button matIconButton aria-label="Favorite">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="More options">
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matIconButton disabled aria-label="Anchor">
        <mat-icon>anchor</mat-icon>
      </button>
      <button matIconButton disabled aria-label="Favorite">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton disabled aria-label="More options">
        <mat-icon>more_vert</mat-icon>
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
  gap: 1rem;
  padding: 0.5rem;
}

.background-invert {
  background-color: var(--mat-sys-inverse-surface);
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-icon-example',
  templateUrl: './buttons-icon-example.html',
  styleUrl: './buttons-icon-example.scss',
  imports: [MatIconButton, MatIcon],
})
export class ButtonsIconExample {}`;

@Component({
  template: htmlCode,
  imports: [MatIconButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsIconComponent: InputViewerComponent = {
  exampleName: 'Buttons Icon',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
