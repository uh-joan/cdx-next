import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-slide-toggle role="button" 
    color="primary">
    Enabled, Unchecked
  </mat-slide-toggle>
  <mat-slide-toggle role="button" 
    color="primary" [checked]="true">
    Enabled, Checked
  </mat-slide-toggle>
  <mat-slide-toggle disabled role="button">
    Disabled, Unchecked
  </mat-slide-toggle>
  <mat-slide-toggle disabled role="button" 
    color="primary" [checked]="true">
    Disabled, Checked
  </mat-slide-toggle>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}`;

@Component({
  template: htmlCode,
  imports: [MatSlideToggleModule],
  styles: styleCode,
})
class SampleComponent {}

export const SidenavComponent: InputViewerComponent = {
  exampleName: 'Sidenav',
  dynamicComponent: SampleComponent,
  height: 35,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    template: htmlCode,
    imports: [
      MatSlideToggleModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
