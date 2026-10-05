import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__row">
    <mat-slide-toggle [checked]="true">Density 0</mat-slide-toggle>
    <mat-slide-toggle>Density 0</mat-slide-toggle>
  </div>
  <div class="story__row hlx-density--1">
    <mat-slide-toggle [checked]="true">Density -1</mat-slide-toggle>
    <mat-slide-toggle>Density -1</mat-slide-toggle>
  </div>
  <div class="story__row hlx-density--2">
    <mat-slide-toggle [checked]="true">Density -2</mat-slide-toggle>
    <mat-slide-toggle>Density -2</mat-slide-toggle>
  </div>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story__row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatSlideToggleModule],
  styles: [styleCode],
})
class SampleComponent {}

export const SlideToggleDensityComponent: InputViewerComponent = {
  exampleName: 'Slide Toggle Density',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

// hlx-density--1 and hlx-density--2 match the Figma 46x28 and 40x24 toggles.
@Component({
  selector: 'app-slide-toggle-density-example',
  templateUrl: './slide-toggle-density-example.html',
  styleUrl: './slide-toggle-density-example.scss',
  imports: [MatSlideToggle],
})
export class SlideToggleDensityExample {}`,
};
