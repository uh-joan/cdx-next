import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
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
    <button matButton="outlined">Card action button</button>
    <button matButton="filled">Card action button</button>
  </mat-card-actions>
</mat-card>
`;

const styleCode = `.story {
    padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-basic-card-example',
  templateUrl: './basic-card-example.html',
  styleUrl: './basic-card-example.scss',
  imports: [MatCardModule, MatButton],
})
export class BasicCardExample {}`;

@Component({
  template: htmlCode,
  imports: [MatCardModule, MatButton],
  styles: [styleCode],
})
class SampleComponent {}

export const BasicCardComponent: InputViewerComponent = {
  exampleName: 'Basic Card',
  dynamicComponent: SampleComponent,
  height: 40,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
