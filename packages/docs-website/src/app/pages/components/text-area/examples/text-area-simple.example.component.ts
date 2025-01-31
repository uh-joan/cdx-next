import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-form-field appearance="fill" 
    class="mat-form-field-textarea wide">
    <textarea
      matInput
      placeholder="Textarea"
      #message
      maxlength="256"
    ></textarea>
    <mat-label>Filled text area</mat-label>
  </mat-form-field>
  <mat-form-field appearance="outline" 
    class="mat-form-field-textarea wide">
    <textarea
      matInput
      placeholder="Textarea"
      #message
      maxlength="256"
    ></textarea>
    <mat-label>Outlined text area</mat-label>
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
  standalone: true,
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule],
  styles: styleCode,
})
class SampleComponent {}

export const TextAreaSimpleComponent: InputViewerComponent = {
  exampleName: 'Text Area',
  dynamicComponent: SampleComponent,
  height: 42,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
      MatFormFieldModule,
      MatInputModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
