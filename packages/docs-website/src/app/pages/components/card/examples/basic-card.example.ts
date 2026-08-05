import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-card class="story">
  <mat-card-header>
    <mat-card-title>Card title</mat-card-title>
    <mat-card-subtitle>
      Card subtitle
    </mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <p>Card content goes here.</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button mat-stroked-button 
        color="primary">
      Card action button
    </button>
    <button mat-button mat-flat-button 
        color="primary">
      Card action button
    </button>
  </mat-card-actions>
</mat-card>
`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatCardModule, MatButtonModule],
  styles: [styleCode],
})
class SampleComponent {}

export const BasicCardComponent: InputViewerComponent = {
  exampleName: 'Basic Card',
  dynamicComponent: SampleComponent,
  height: 40,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    template: htmlCode,
    imports: [
        MatCardModule,
        MatButtonModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
