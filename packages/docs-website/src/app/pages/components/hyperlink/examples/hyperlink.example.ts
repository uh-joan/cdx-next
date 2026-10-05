import { Component } from '@angular/core';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (size of sizes; track size) {
    <div class="story__row">
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link" [class]="'hlx-link-' + size">Primary link</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link hlx-link-underline" [class]="'hlx-link-' + size">Underlined link</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link hlx-link-blue" [class]="'hlx-link-' + size">Blue link</a>
      <a href="https://example.com/unvisited" (click)="$event.preventDefault()" class="hlx-link hlx-link-visited" [class]="'hlx-link-' + size">Visited link</a>
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

export const HyperlinkComponent: InputViewerComponent = {
  exampleName: 'Hyperlink',
  dynamicComponent: SampleComponent,
  height: 25,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';

// Sizes: hlx-link-lg (16/24), hlx-link-md (14/24), hlx-link-sm (13/16).
// hlx-link-blue switches to the visited colour automatically after a visit.
@Component({
  selector: 'app-hyperlink-example',
  templateUrl: './hyperlink-example.html',
  styleUrl: './hyperlink-example.scss',
})
export class HyperlinkExample {
  sizes = ['lg', 'md', 'sm'];
}`,
};
