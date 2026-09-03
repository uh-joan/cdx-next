import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-toolbar>
    <mat-toolbar-row>
      <div>
        <span>Toolbar</span>
      </div>
    </mat-toolbar-row>
  </mat-toolbar>
</div>`;

const styleCode = `.story {
  width: 25rem;
  padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

// mat-toolbar's color="primary" input is a Material 2 API; the Helix theme
// styles the toolbar through design tokens instead.
@Component({
  selector: 'app-toolbar-default-example',
  templateUrl: './toolbar-default-example.html',
  styleUrl: './toolbar-default-example.scss',
  imports: [MatToolbarModule],
})
export class ToolbarDefaultExample {}`;

@Component({
  template: htmlCode,
  imports: [MatToolbarModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ToolbarDefaultComponent: InputViewerComponent = {
  exampleName: 'Toolbar Default',
  dynamicComponent: SampleComponent,
  height: 27,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
