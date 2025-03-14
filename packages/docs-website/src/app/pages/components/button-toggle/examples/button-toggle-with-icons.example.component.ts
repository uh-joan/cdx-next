import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-button-toggle-group 
    class="hlx-button-toggle-container">
    <mat-button-toggle checked value="left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="justify" disabled>
      <mat-icon>format_align_justify</mat-icon>
    </mat-button-toggle>
  </mat-button-toggle-group>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatButtonToggleModule, MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const ButtonToggleWithIconComponent: InputViewerComponent = {
  exampleName: 'Button Toggle With Icons',
  dynamicComponent: SampleComponent,
  height: 35,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  template: htmlCode,
  imports: [
    MatButtonToggleModule,
    MatIconModule
  ],
  styles: styleCode,
})
class SampleComponent {}`,
};
