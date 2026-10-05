import { Component } from '@angular/core';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (size of sizes; track size) {
    <div class="story__row">
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" [class]="'hlx-link-' + size">Primary</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link-blue" [class]="'hlx-link-' + size">Blue</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link-visited" [class]="'hlx-link-' + size">Visited</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link-inline" [class]="'hlx-link-' + size">Inline</a>
    </div>
  }
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}`;

@Component({
  template: htmlCode,
  styles: [styleCode],
})
class SampleComponent {
  sizes = ['lg', 'md', 'sm'];
}

export const HyperlinkSizesComponent: InputViewerComponent = {
  exampleName: 'Hyperlink Sizes',
  dynamicComponent: SampleComponent,
  height: 25,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';

// Figma sizes: hlx-link-lg (16/24), hlx-link-md (14/24), hlx-link-sm (13/16).
// Combine with hlx-link-blue, hlx-link-visited or hlx-link-inline.
@Component({
  selector: 'app-hyperlink-sizes-example',
  templateUrl: './hyperlink-sizes-example.html',
  styleUrl: './hyperlink-sizes-example.scss',
})
export class HyperlinkSizesExample {
  sizes = ['lg', 'md', 'sm'];
}`,
};
