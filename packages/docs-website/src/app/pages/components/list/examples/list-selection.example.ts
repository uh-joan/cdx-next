import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-selection-list role="list">
    <span matSubheader>List with selection</span>
    <mat-list-option 
      role="listitem">Books</mat-list-option>
    <mat-list-option 
      role="listitem">Clogs</mat-list-option>
    <mat-list-option 
      role="listitem">
      Loafers
    </mat-list-option>
    <mat-list-option role="listitem">
      Moccasinos
    </mat-list-option>
  </mat-selection-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-selection-example',
  templateUrl: './list-selection-example.html',
  styleUrl: './list-selection-example.scss',
  imports: [MatListModule],
})
export class ListSelectionExample {}`;

@Component({
  template: htmlCode,
  imports: [MatListModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ListSelectionComponent: InputViewerComponent = {
  exampleName: 'List Selection',
  dynamicComponent: SampleComponent,
  height: 33,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
