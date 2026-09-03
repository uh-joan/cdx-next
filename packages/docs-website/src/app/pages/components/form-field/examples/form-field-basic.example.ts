import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field>
        <mat-label>Input</mat-label>
        <input matInput>
    </mat-form-field>
    <mat-form-field>
        <mat-label>Select</mat-label>
        <mat-select>
            <mat-option value="one">First option</mat-option>
            <mat-option value="two">Second option</mat-option>
        </mat-select>
    </mat-form-field>
    <mat-form-field>
        <mat-label>Textarea</mat-label>
        <textarea matInput></textarea>
    </mat-form-field>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  styles: [styleCode],
})
class SampleComponent {}

export const FormFieldBasicComponent: InputViewerComponent = {
  exampleName: 'Form FIeld Basic',
  dynamicComponent: SampleComponent,
  height: 34,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    template: htmlCode,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
