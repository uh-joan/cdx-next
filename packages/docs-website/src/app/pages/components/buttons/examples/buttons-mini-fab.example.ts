import { Component } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matMiniFab aria-label="Anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button matMiniFab aria-label="Anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-negative">
      <button matMiniFab aria-label="Anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matMiniFab aria-label="Anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matMiniFab disabled aria-label="Disabled anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button matMiniFab disabled aria-label="Disabled anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-negative">
      <button matMiniFab disabled aria-label="Disabled anchor icon">
        <mat-icon>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matMiniFab disabled aria-label="Disabled anchor icon">
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
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-mini-fab-example',
  templateUrl: './buttons-mini-fab-example.html',
  styleUrl: './buttons-mini-fab-example.scss',
  imports: [MatMiniFabButton, MatIcon],
})
export class ButtonsMiniFabExample {}`;

@Component({
  template: htmlCode,
  imports: [MatMiniFabButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsMiniFabComponent: InputViewerComponent = {
  exampleName: 'Buttons Mini Fab',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
