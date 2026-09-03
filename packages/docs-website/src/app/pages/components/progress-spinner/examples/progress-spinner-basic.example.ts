import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-progress-spinner
        mode="indeterminate"
    ></mat-progress-spinner>
    <mat-progress-spinner
        mode="determinate"
        value="70"
    ></mat-progress-spinner>
    <mat-progress-spinner
        mode="indeterminate"
        diameter="24"
    ></mat-progress-spinner>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

// mat-progress-spinner's color input is a Material 2 API and has no effect
// under the Material 3 based Helix theme.
@Component({
  selector: 'app-progress-spinner-basic-example',
  templateUrl: './progress-spinner-basic-example.html',
  styleUrl: './progress-spinner-basic-example.scss',
  imports: [MatProgressSpinner],
})
export class ProgressSpinnerBasicExample {}`;

@Component({
  template: htmlCode,
  imports: [MatProgressSpinnerModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ProgressSpinnerBasicComponent: InputViewerComponent = {
  exampleName: 'Progress Spinner',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
