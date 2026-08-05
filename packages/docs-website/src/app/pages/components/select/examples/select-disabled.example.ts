import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-form-field appearance="fill">
    <mat-label>Fill</mat-label>
    <mat-select
      disabled
      placeholder="Choose an option"
      panelClass="common-panel"
    >
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2" 
        disabled>Option 2 (disabled)</mat-option>
      <mat-option value="option3">Option 3</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Outline</mat-label>
    <mat-select
      disabled
      placeholder="Choose an option"
      panelClass="common-panel"
    >
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2" 
        disabled>Option 2 (disabled)</mat-option>
      <mat-option value="option3">Option 3</mat-option>
    </mat-select>
  </mat-form-field>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatSelectModule],
  styles: [styleCode],
})
class SampleComponent {}

export const SelectDisabledComponent: InputViewerComponent = {
  exampleName: 'Select Disabled',
  dynamicComponent: SampleComponent,
  height: 52,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
    template: htmlCode,
    imports: [
      MatSelectModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
