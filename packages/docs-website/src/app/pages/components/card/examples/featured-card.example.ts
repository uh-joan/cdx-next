import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-card class="story example-card">
  <mat-card-header>
    <div mat-card-avatar 
      class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img
    mat-card-image
    class="shiba-image"
    src="https://material.angular.dev/assets/img/examples/shiba2.jpg"
    alt="Photo of a Shiba Inu"
  />
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
    <button matButton>LIKE</button>
    <button matButton>SHARE</button>
  </mat-card-actions>
</mat-card>
`;

const styleCode = `.story {
  padding: 1rem;
}

.story .example-header-image {
  background-image: url('https://material.angular.dev/assets/img/examples/shiba1.jpg');
  background-size: cover;
}

.story .shiba-image {
  display: block;
  width: 100%;
  height: auto;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-featured-card-example',
  templateUrl: './featured-card-example.html',
  styleUrl: './featured-card-example.scss',
  imports: [MatCardModule, MatButton],
})
export class FeaturedCardExample {}`;

@Component({
  template: htmlCode,
  imports: [MatCardModule, MatButton],
  styles: [styleCode],
})
class SampleComponent {}

export const FeaturedCardComponent: InputViewerComponent = {
  exampleName: 'Featured Card',
  dynamicComponent: SampleComponent,
  height: 43,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
