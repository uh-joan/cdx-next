import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-progress-spinner
        mode="indeterminate"
        color="primary"
    ></mat-progress-spinner>
    <mat-progress-spinner
        mode="determinate"
        value="70"
        color="accent"
    ></mat-progress-spinner>
    <mat-progress-spinner
        mode="indeterminate"
        color="warn"
    ></mat-progress-spinner>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatProgressSpinnerModule],
  styles: styleCode,
})
class SampleComponent {}

export const ProgressSpinnerBasicComponent: InputViewerComponent = {
  exampleName: 'Progress Spinner',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    template: htmlCode,
    imports: [
        MatProgressSpinnerModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
