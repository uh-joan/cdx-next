import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-slide-toggle>
    Enabled, Unchecked
  </mat-slide-toggle>
  <mat-slide-toggle [checked]="true">
    Enabled, Checked
  </mat-slide-toggle>
  <mat-slide-toggle disabled>
    Disabled, Unchecked
  </mat-slide-toggle>
  <mat-slide-toggle disabled [checked]="true">
    Disabled, Checked
  </mat-slide-toggle>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle-example',
  templateUrl: './slide-toggle-example.html',
  styleUrl: './slide-toggle-example.scss',
  imports: [MatSlideToggle],
})
export class SlideToggleExample {}`;

@Component({
  template: htmlCode,
  imports: [MatSlideToggleModule],
  styles: [styleCode],
})
class SampleComponent {}

export const SlideToggleComponent: InputViewerComponent = {
  exampleName: 'Slide Toggle',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
