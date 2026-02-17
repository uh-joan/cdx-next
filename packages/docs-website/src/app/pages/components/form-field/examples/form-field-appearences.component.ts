import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
  <mat-form-field appearance="fill">
    <input matInput placeholder="No label form field">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
    <mat-form-field appearance="outline">
    <input matInput placeholder="No label form field">
  </mat-form-field>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const FormFieldAppearencesNameComponent: InputViewerComponent = {
  exampleName: 'Form field appearance variants',
  dynamicComponent: SampleComponent,
  height: 34,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    template: htmlCode,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
