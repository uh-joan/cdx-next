import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__section 
    mat-typography">
    <h3>Basic Slider</h3>
    <mat-slider><input matSliderThumb /></mat-slider>
  </div>
  <div class="story__section">
  <h3>Disabled Slider</h3>
    <mat-slider
      color="primary"
      disabled="true"
      thumbLabel
      title="slider with volume options"
      min="0"
      max="100"
      step="1"
    >
      <input matSliderThumb />
    </mat-slider>
  </div>
  <div class="story__section">
    <h3>Slider With Number Label</h3>
    <mat-slider
      color="primary"
      discrete="true"
      title="slider with volume options"
      min="0"
      max="100"
      step="1"
    >
      <input matSliderThumb />
    </mat-slider>
  </div>
  <div class="story__section">
    <h3>Range Slider</h3>
    <mat-slider color="primary" 
      title="range slider" min="0" max="100" step="1">
      <input matSliderStartThumb />
      <input matSliderEndThumb />
    </mat-slider>
  </div>
</div>

`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatSliderModule],
  styles: styleCode,
})
class SampleComponent {}

export const SliderSimpleComponent: InputViewerComponent = {
  exampleName: 'Slider Simple',
  dynamicComponent: SampleComponent,
  height: 74,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
    template: htmlCode,
    imports: [
      MatSliderModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
