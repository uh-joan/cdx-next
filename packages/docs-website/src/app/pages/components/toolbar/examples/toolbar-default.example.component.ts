import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-toolbar color="primary">
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

@Component({
  template: htmlCode,
  imports: [MatToolbarModule],
  styles: styleCode,
})
class SampleComponent {}

export const ToolbarDefaultComponent: InputViewerComponent = {
  exampleName: 'Toolbar Default',
  dynamicComponent: SampleComponent,
  height: 27,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    template: htmlCode,
    imports: [
      MatToolbarModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
