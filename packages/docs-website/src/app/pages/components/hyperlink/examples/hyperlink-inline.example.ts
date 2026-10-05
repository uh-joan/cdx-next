import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<p class="story">
  Hyperlinks inside running text keep a permanent underline, for example
  <a routerLink="/foundations/density" class="hlx-link-inline">the Density guidelines</a>, so they
  don't rely on color alone. Combine it with a color class, for example
  <a routerLink="/foundations/color" class="hlx-link-inline hlx-link-blue">the Color guidelines</a>.
</p>
`;

const styleCode = `.story {
  padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hyperlink-inline-example',
  templateUrl: './hyperlink-inline-example.html',
  styleUrl: './hyperlink-inline-example.scss',
  imports: [RouterLink],
})
export class HyperlinkInlineExample {}`;

@Component({
  template: htmlCode,
  imports: [RouterLink],
  styles: [styleCode],
})
class SampleComponent {}

export const HyperlinkInlineComponent: InputViewerComponent = {
  exampleName: 'Hyperlink Inline',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
