import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-toolbar>
    <mat-icon aria-hidden="false" 
      aria-label="Example heart icon">
      menu
    </mat-icon>
    <span class="toolbar__title">My App</span>
    <span class="toolbar__spacer"></span>
    <mat-icon aria-hidden="false" 
      aria-label="Example refresh icon">
      refresh
    </mat-icon>
    <mat-icon aria-hidden="false" 
      aria-label="Example more vert icon">
      more_vert
    </mat-icon>
  </mat-toolbar>
</div>`;

const styleCode = `.story {
  width: 25rem;
  padding: 1rem;
}

.toolbar__title {
  margin-left: 1rem;
}

.toolbar__spacer {
  flex: 1 1 auto;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-with-menu-icon-example',
  templateUrl: './toolbar-with-menu-icon-example.html',
  styleUrl: './toolbar-with-menu-icon-example.scss',
  imports: [MatToolbarModule, MatIcon],
})
export class ToolbarWithMenuIconExample {}`;

@Component({
  template: htmlCode,
  imports: [MatToolbarModule, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ToolbarWithMenuIconComponent: InputViewerComponent = {
  exampleName: 'Toolbar With Menu Icon',
  dynamicComponent: SampleComponent,
  height: 37,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
