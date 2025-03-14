import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <h3>Radio Buttons</h3>
  <div class="story__section">
    <mat-radio-group role="radiogroup" class="columns">
      <mat-radio-button color="primary" 
        value="1" role="radio" checked>
        Option 1
      </mat-radio-button>
      <mat-radio-button color="primary" 
        value="2" role="radio">
        Option 2
      </mat-radio-button>
    </mat-radio-group>
  </div>
</div>
<div class="story">
  <h3>Disabled Radio Buttons</h3>
  <div class="story__section">
    <mat-radio-group role="radiogroup" class="columns">
      <mat-radio-button
        color="primary"
        value="1"
        role="radio"
        checked
        disabled
      >
        Option 1
      </mat-radio-button>
      <mat-radio-button color="primary" 
        value="2" role="radio" disabled>
        Option 2
      </mat-radio-button>
    </mat-radio-group>
  </div>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatRadioModule],
  styles: styleCode,
})
class SampleComponent {}

export const RadioButtonBasicComponent: InputViewerComponent = {
  exampleName: 'Radio Button',
  dynamicComponent: SampleComponent,
  height: 62,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    template: htmlCode,
    imports: [
      MatRadioModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
