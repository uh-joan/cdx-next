import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row ">
      <button mat-button>Button</button>
      <button mat-button>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button mat-button>Button</button>
      <button mat-button>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button mat-button>Button</button>
      <button mat-button>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert" >
      <button mat-button>Button</button>
      <button mat-button>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
  </div>
  <div class="story__box">
    <div class="story__row">
      <button mat-button disabled>Button</button>
      <button mat-button disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>

    <div class="story__row hlx-btn-accent">
      <button mat-button disabled>Button</button>
      <button mat-button disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-negative">
      <button mat-button disabled>Button</button>
      <button mat-button disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
    <div class="story__row hlx-btn-invert background-invert">
      <button mat-button disabled>Button</button>
      <button mat-button disabled>
        <mat-icon>anchor</mat-icon>
        Button
      </button>
      <button mat-button disabled>
        Button
        <mat-icon iconPositionEnd>anchor</mat-icon>
      </button>
    </div>
  </div>
</div>`;

const styleCode = `@use "@cdx/theme-angular-material" as hlx;

.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__box {
      display: flex;
      flex-direction: column;
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
  standalone: true,
  template: htmlCode,
  imports: [MatButtonModule, MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const ButtonsBasicdDefaultComponent: InputViewerComponent = {
  exampleName: 'Buttons Basic Default',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
