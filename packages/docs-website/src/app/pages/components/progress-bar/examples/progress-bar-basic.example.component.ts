import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

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
        color="accent"
    ></mat-progress-bar>
    <mat-progress-bar
        mode="buffer"
        color="warn"
    ></mat-progress-bar>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatProgressBarModule],
  styles: styleCode,
})
class SampleComponent {}

export const PaginatorBasicComponent: InputViewerComponent = {
  exampleName: 'Paginator',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    template: htmlCode,
    imports: [
        MatProgressBarModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
