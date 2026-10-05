import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <span>Section one</span>
  <mat-divider class="hlx-divider-invert"></mat-divider>
  <span>Section two</span>
  <mat-divider class="hlx-divider-invert" vertical></mat-divider>
  <span>Section three</span>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #2a2b2d; /* Helix surface/invert */
  color: #ffffff; /* Helix text/invert */
}

.story mat-divider:not([vertical]) {
  flex-basis: 100%;
}

.story mat-divider[vertical] {
  height: 1.5rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatDividerModule],
  styles: [styleCode],
})
class SampleComponent {}

export const DividerInvertComponent: InputViewerComponent = {
  exampleName: 'Divider on dark surfaces',
  dynamicComponent: SampleComponent,
  height: 25,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

// hlx-divider-invert is the Figma "light" divider, for dark backgrounds.
@Component({
  selector: 'app-divider-invert-example',
  templateUrl: './divider-invert-example.html',
  styleUrl: './divider-invert-example.scss',
  imports: [MatDividerModule],
})
export class DividerInvertExample {}`,
};
