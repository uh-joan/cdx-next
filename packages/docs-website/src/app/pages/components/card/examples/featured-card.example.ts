import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-card class="story example-card">
  <mat-card-header>
    <div mat-card-avatar 
      class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image class="shiba-image" />
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six 
      original and distinct spitz breeds of 
      dog from Japan. A small, agile dog that 
      copes very well with mountainous terrain, 
      the Shiba Inu was originally bred for 
      hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
`;

const styleCode = `.story {
  padding: 1rem;

  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }

  .shiba-image {
    display: block;
    width: 100%;
    height: auto;
    content: url('https://material.angular.io/assets/img/examples/shiba2.jpg');
    alt: "Photo of a Shiba Inu";
  }
}`;

@Component({
  template: htmlCode,
  imports: [MatCardModule, MatButtonModule],
  styles: [styleCode],
})
class SampleComponent {}

export const FeaturedCardComponent: InputViewerComponent = {
  exampleName: 'Featured Card',
  dynamicComponent: SampleComponent,
  height: 43,
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
