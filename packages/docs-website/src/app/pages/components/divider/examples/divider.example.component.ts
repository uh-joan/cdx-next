import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-list style="width: 100%;">
        <mat-list-item>Item 1</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 2</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 3</mat-list-item>
    </mat-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatDividerModule, MatListModule],
  styles: styleCode,
})
class SampleComponent {}

export const DividerComponent: InputViewerComponent = {
  exampleName: 'Divider',
  dynamicComponent: SampleComponent,
  height: 30,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
    template: htmlCode,
    imports: [
        MatDividerModule,
        MatListModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
