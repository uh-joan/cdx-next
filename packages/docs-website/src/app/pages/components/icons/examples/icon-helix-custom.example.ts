import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { HELIX_ICONS } from '@cdx/helix-icons';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (name of names; track name) {
    <figure class="story__icon">
      <mat-icon [svgIcon]="'hlx:' + name"></mat-icon>
      <figcaption>{{ name }}</figcaption>
    </figure>
  }
</div>
<div class="story hlx-icon-accent">
  <mat-icon svgIcon="hlx:ai-summary"></mat-icon>
  <mat-icon svgIcon="hlx:ai-search"></mat-icon>
  <span>Custom icons take the text colour, so the hlx-icon-* classes work.</span>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.story__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 7rem;
  margin: 0;
  font-size: 12px;
}`;

@Component({
  template: htmlCode,
  imports: [MatIcon],
  styles: [styleCode],
})
class SampleComponent {
  names = Object.keys(HELIX_ICONS);
}

export const IconHelixCustomComponent: InputViewerComponent = {
  exampleName: 'Helix custom icons',
  dynamicComponent: SampleComponent,
  verticalView: true,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode: `// app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { provideHelixIcons } from '@cdx/helix-icons';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideHelixIcons()],
};

// Standard icons keep using the Material Symbols font:
//   <mat-icon>search</mat-icon>
// Clarivate-only icons use the hlx namespace:
//   <mat-icon svgIcon="hlx:ai-summary"></mat-icon>`,
};
