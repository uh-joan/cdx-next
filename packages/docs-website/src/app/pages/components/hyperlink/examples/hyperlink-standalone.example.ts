import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <a routerLink="/components/buttons">Go to Button</a>
  <a routerLink="/components/icon-button">Go to Icon button</a>
  <a routerLink="/foundations/density">Read the Density guidelines</a>
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
  selector: 'app-hyperlink-standalone-example',
  templateUrl: './hyperlink-standalone-example.html',
  styleUrl: './hyperlink-standalone-example.scss',
  imports: [RouterLink],
})
export class HyperlinkStandaloneExample {}`;

@Component({
  template: htmlCode,
  imports: [RouterLink],
  styles: [styleCode],
})
class SampleComponent {}

export const HyperlinkStandaloneComponent: InputViewerComponent = {
  exampleName: 'Hyperlink Standalone',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
