import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-toolbar color="primary">
    <mat-icon aria-hidden="false" 
      aria-label="Example heart icon">
      menu
    </mat-icon>
    <span style="margin-left: 1rem;">My App</span>
    <span style="flex: 1 1 auto;"></span>
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
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatToolbarModule, MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const ToolbarWithMenuIconComponent: InputViewerComponent = {
  exampleName: 'Toolbar With Menu Icon',
  dynamicComponent: SampleComponent,
  height: 37,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
      MatToolbarModule,
      MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
