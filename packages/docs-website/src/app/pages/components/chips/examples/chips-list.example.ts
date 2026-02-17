import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-listbox class="story">
    <div class="story__options-container">
        <mat-chip-option>John</mat-chip-option>
        <mat-chip-option>Paul</mat-chip-option>
        <mat-chip-option>George</mat-chip-option>
        <mat-chip-option>Ringo</mat-chip-option>
    </div>
</mat-chip-listbox>`;

const styleCode = `.story {
    padding: 1rem;
    
    &__options-container {
        min-width: 20rem;
        display: flex;
        justify-content: space-between;
    }
}`;

@Component({
  template: htmlCode,
  imports: [MatChipsModule],
  styles: styleCode,
})
class SampleComponent {}

export const ChipsListComponent: InputViewerComponent = {
  exampleName: 'Chips List',
  dynamicComponent: SampleComponent,
  height: 28,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    template: htmlCode,
    imports: [
        MatChipsModule,
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
