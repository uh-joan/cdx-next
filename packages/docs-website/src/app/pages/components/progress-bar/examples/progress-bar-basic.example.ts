import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-progress-bar 
        mode="indeterminate"
    ></mat-progress-bar>
    <mat-progress-bar
        mode="query"
    ></mat-progress-bar>
    <mat-progress-bar 
        mode="determinate" 
        value="40"
    ></mat-progress-bar>
    <mat-progress-bar
        mode="buffer"
    ></mat-progress-bar>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

// mat-progress-bar's color input is a Material 2 API and has no effect under
// the Material 3 based Helix theme.
@Component({
  selector: 'app-progress-bar-basic-example',
  templateUrl: './progress-bar-basic-example.html',
  styleUrl: './progress-bar-basic-example.scss',
  imports: [MatProgressBar],
})
export class ProgressBarBasicExample {}`;

@Component({
  template: htmlCode,
  imports: [MatProgressBarModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ProgressBarBasicComponent: InputViewerComponent = {
  exampleName: 'Progress Bar',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
