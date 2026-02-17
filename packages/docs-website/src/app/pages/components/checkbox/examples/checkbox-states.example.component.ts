import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-checkbox 
        [checked]="true"
    >Checked</mat-checkbox>
    <mat-checkbox 
        [checked]="true" 
        [disabled]="true">
        Checked + Disabled
    </mat-checkbox>
    <mat-checkbox 
        [indeterminate]="true"
        >Indeterminate</mat-checkbox>
    <mat-checkbox>Unchecked</mat-checkbox>
    <mat-checkbox 
        [disabled]="true">Unchecked + Disabled
    </mat-checkbox>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
}`;

@Component({
  template: htmlCode,
  imports: [MatCheckboxModule],
  styles: styleCode,
})
class SampleComponent {}

export const CheckboxStatesComponent: InputViewerComponent = {
  exampleName: 'Checkbox states',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    template: htmlCode,
    imports: [
        MatCheckboxModule,
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
