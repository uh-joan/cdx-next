import { Component } from '@angular/core';
import { MatAnchor, MatIconAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <a matButton href="https://material.angular.dev" target="_blank" rel="noopener">
        Text link
      </a>
      <a matButton="filled" href="https://material.angular.dev" target="_blank" rel="noopener">
        Filled link
      </a>
      <a matButton="outlined" href="https://material.angular.dev" target="_blank" rel="noopener">
        Outlined link
        <mat-icon iconPositionEnd>open_in_new</mat-icon>
      </a>
      <a matIconButton href="https://material.angular.dev" target="_blank" rel="noopener" aria-label="Open Material docs">
        <mat-icon>open_in_new</mat-icon>
      </a>
    </div>

    <div class="story__row hlx-btn-accent">
      <a matButton="filled" href="https://material.angular.dev" target="_blank" rel="noopener">
        Accent link
      </a>
      <a matButton="outlined" href="https://material.angular.dev" target="_blank" rel="noopener">
        Accent link
      </a>
    </div>

    <div class="story__row hlx-btn-negative">
      <a matButton="filled" href="https://material.angular.dev" target="_blank" rel="noopener">
        Negative link
      </a>
      <a matButton="outlined" href="https://material.angular.dev" target="_blank" rel="noopener">
        Negative link
      </a>
    </div>
  </div>
</div>
`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.story__box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatAnchor, MatIconAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

// Use RouterLink instead of href for in-app navigation:
// <a matButton routerLink="/components/buttons">Buttons</a>
@Component({
  selector: 'app-buttons-anchor-example',
  templateUrl: './buttons-anchor-example.html',
  styleUrl: './buttons-anchor-example.scss',
  imports: [MatAnchor, MatIconAnchor, MatIcon],
})
export class ButtonsAnchorExample {}`;

@Component({
  template: htmlCode,
  imports: [MatAnchor, MatIconAnchor, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsAnchorComponent: InputViewerComponent = {
  exampleName: 'Buttons Anchor',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
