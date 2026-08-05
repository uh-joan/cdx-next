import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matFab>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-accent">
      <button matFab>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matFab>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matFab>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
  </div>

  <div class="story__box">
    <div class="story__row">
      <button matFab disabled>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-accent">
      <button matFab disabled>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button matFab disabled>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button matFab disabled>
        <mat-icon>anchor</mat-icon>
      </button>
    </div>
  </div>
</div>
`;

const styleCode = `@use "@cdx/theme-angular-material" as hlx;

.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    &__row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: .5rem;
    }

    .background-invert {
        background-color: hlx.$surface-invert;
    }
}`;

@Component({
  template: htmlCode,
  imports: [MatButtonModule, MatIconModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsFabDefaultComponent: InputViewerComponent = {
  exampleName: 'Buttons Fab Default',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode: htmlCode,
  cssCode: styleCode,
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
