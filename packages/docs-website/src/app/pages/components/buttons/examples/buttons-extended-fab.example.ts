import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matFab extended>
        <mat-icon>anchor</mat-icon>
        Extended Fab
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button matFab extended>
        <mat-icon>anchor</mat-icon>
        Extended Fab
      </button>
    </div>

    <div class="story__row hlx-btn-negative">
      <button matFab extended>
        <mat-icon>anchor</mat-icon>
        Extended Fab
      </button>
    </div>

    <div class="story__row hlx-btn-invert background-invert">
      <button matFab extended>
        <mat-icon>anchor</mat-icon>
        Extended Fab
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matFab extended disabled>
        <mat-icon>anchor</mat-icon>
        Extended Fab
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
  selector: 'app-buttons-extended-fab-example',
  templateUrl: './buttons-extended-fab-example.html',
  styleUrl: './buttons-extended-fab-example.scss',
  imports: [MatFabButton, MatIcon],
})
export class ButtonsExtendedFabExample {}`;

@Component({
  template: htmlCode,
  imports: [MatFabButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsExtendedFabComponent: InputViewerComponent = {
  exampleName: 'Buttons Extended Fab',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
