import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-selection-list role="list">
    <span matSubheader>List with selection</span>
    <mat-list-option color="primary" 
      role="listitem">Books</mat-list-option>
    <mat-list-option color="primary" 
      role="listitem">Clogs</mat-list-option>
    <mat-list-option color="primary" 
      role="listitem">
      Loafers
    </mat-list-option>
    <mat-list-option color="primary" role="listitem">
      Moccasinos
    </mat-list-option>
  </mat-selection-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatCheckboxModule, MatListModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ListSelectionComponent: InputViewerComponent = {
  exampleName: 'List Selection',
  dynamicComponent: SampleComponent,
  height: 33,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatCheckboxModule } 
  from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@Component({
    template: htmlCode,
    imports: [
        MatCheckboxModule,
        MatListModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
