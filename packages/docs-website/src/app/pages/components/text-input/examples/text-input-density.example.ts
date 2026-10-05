import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (level of levels; track level) {
    <mat-form-field appearance="outline" [class]="'hlx-density-' + level">
      <mat-label>Density {{ level }}</mat-label>
      <input matInput placeholder="Placeholder" />
    </mat-form-field>
  }
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule],
  styles: [styleCode],
})
class SampleComponent {
  levels = [0, -1, -2, -3, -4];
}

export const TextInputDensityComponent: InputViewerComponent = {
  exampleName: 'Text Input Density',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// hlx-density-0 to hlx-density--4 give the Figma heights 56, 52, 48, 44 and 40px.
@Component({
  selector: 'app-text-input-density-example',
  templateUrl: './text-input-density-example.html',
  styleUrl: './text-input-density-example.scss',
  imports: [MatFormFieldModule, MatInputModule],
})
export class TextInputDensityExample {
  levels = [0, -1, -2, -3, -4];
}`,
};
