import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-form-field appearance="fill">
    <mat-label>Filled text input</mat-label>
    <input matInput title="Please enter text" placeholder="Placeholder" />
    <mat-hint>Helper text</mat-hint>
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Outlined text input</mat-label>
    <input matInput title="Please enter text" placeholder="Placeholder" />
    <mat-hint>Helper text</mat-hint>
  </mat-form-field>
</div>`;

const styleCode = `.story {
  width: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule],
  styles: styleCode,
})
class SampleComponent {}

export const TextAreaSimpleComponent: InputViewerComponent = {
  exampleName: 'Text Area',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    template: htmlCode,
    imports: [
      MatFormFieldModule,
      MatInputModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
