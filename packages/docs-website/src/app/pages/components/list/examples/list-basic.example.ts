import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-list role="list">
        <span matSubheader>Groceries</span>
        <mat-list-item 
            role="listitem">Eggs</mat-list-item>
        <mat-list-item 
            role="listitem">Potatoes</mat-list-item>
        <mat-list-item 
            role="listitem">Bacon</mat-list-item>
        <mat-list-item 
            role="listitem">Jam</mat-list-item>
    </mat-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatListModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ListBasicComponent: InputViewerComponent = {
  exampleName: 'List Basic',
  dynamicComponent: SampleComponent,
  height: 28,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
    template: htmlCode,
    imports: [
        MatListModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
