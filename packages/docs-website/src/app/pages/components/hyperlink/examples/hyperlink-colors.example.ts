import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <a routerLink="/components/buttons">Primary (default)</a>
  <a routerLink="/components/buttons" class="hlx-link-blue">Blue</a>
  <a routerLink="/components/buttons" class="hlx-link-visited">Visited</a>
</div>
`;

const styleCode = `.story {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hyperlink-colors-example',
  templateUrl: './hyperlink-colors-example.html',
  styleUrl: './hyperlink-colors-example.scss',
  imports: [RouterLink],
})
export class HyperlinkColorsExample {}`;

@Component({
  template: htmlCode,
  imports: [RouterLink],
  styles: [styleCode],
})
class SampleComponent {}

// hlx-link-blue turns the browser's :visited state into the Helix Visited
// color by itself; hlx-link-visited forces the visited look.
export const HyperlinkColorsComponent: InputViewerComponent = {
  exampleName: 'Hyperlink Colors',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
