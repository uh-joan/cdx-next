import { Component, computed, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { HELIX_PICTOGRAMS } from '@hlx/helix-icons';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-button-toggle-group
    class="hlx-button-toggle-container"
    [value]="theme()"
    (change)="theme.set($event.value)"
    aria-label="Pictogram theme"
  >
    @for (option of themes; track option.value) {
      <mat-button-toggle [value]="option.value">{{ option.label }}</mat-button-toggle>
    }
  </mat-button-toggle-group>

  <div class="story__grid" [class.story__grid--dark]="theme().startsWith('dark')">
    @for (name of pictograms(); track name) {
      <figure class="story__pictogram">
        <mat-icon [svgIcon]="'hlx-pictogram:' + name"></mat-icon>
        <figcaption>{{ name }}</figcaption>
      </figure>
    }
  </div>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.story__grid--dark {
  background-color: #2a2b2d; /* Helix surface/invert */
  color: #ffffff; /* Helix text/invert */
}

.story__pictogram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 11px;
  text-align: center;
}

.story__pictogram mat-icon {
  width: 96px;
  height: 96px;
}`;

@Component({
  template: htmlCode,
  imports: [MatIcon, MatButtonToggleModule],
  styles: [styleCode],
})
class SampleComponent {
  themes = [
    { value: 'light-purple-blue', label: 'Light purple blue' },
    { value: 'dark-purple-blue', label: 'Dark purple blue' },
    { value: 'dark-mint-citrus', label: 'Dark mint citrus' },
  ];
  theme = signal('light-purple-blue');
  pictograms = computed(() =>
    HELIX_PICTOGRAMS.filter((name) => name.endsWith(this.theme())),
  );
}

export const IconHelixPictogramsComponent: InputViewerComponent = {
  exampleName: 'Helix pictograms',
  dynamicComponent: SampleComponent,
  verticalView: true,
  height: 80,
  htmlCode,
  cssCode: styleCode,
  tsCode: `// Pictograms load on first use from assets/helix-pictograms.
// Copy them there in angular.json:
//   { "glob": "**/*.svg",
//     "input": "node_modules/@hlx/helix-icons/svg/pictograms",
//     "output": "assets/helix-pictograms" }
//
// <mat-icon svgIcon="hlx-pictogram:pictogram-001-light-purple-blue"></mat-icon>`,
};
