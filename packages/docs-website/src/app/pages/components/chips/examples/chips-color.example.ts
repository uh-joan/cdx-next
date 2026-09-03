import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-set class="story">
    <div class="story__chips-container">
        <mat-chip 
            class="hlx-primary-chip"
            >primary</mat-chip>
        <mat-chip 
            class="hlx-accent-chip"
            >accent</mat-chip>
        <mat-chip 
            class="hlx-negative-chip"
            >negative</mat-chip>
        <mat-chip 
            class="hlx-warn-chip"
            >warn</mat-chip>
        <mat-chip 
            class="hlx-positive-chip"
            >positive</mat-chip>
        <mat-chip 
            class="hlx-info-chip"
            >info</mat-chip>
        <mat-chip 
            class="hlx-neutral-chip"
            >neutral</mat-chip>
        <mat-chip 
            class="hlx-outlined-chip"
            >outlined</mat-chip>
    </div>
</mat-chip-set>`;

const styleCode = `.story {
    padding: 1rem;
}

.story__chips-container {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

// Chip colour comes from the Helix hlx-*-chip class, not from mat-chip's
// Material 2 color input.
@Component({
  selector: 'app-chips-color-example',
  templateUrl: './chips-color-example.html',
  styleUrl: './chips-color-example.scss',
  imports: [MatChipsModule],
})
export class ChipsColorExample {}`;

@Component({
  template: htmlCode,
  imports: [MatChipsModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ColorChipsComponent: InputViewerComponent = {
  exampleName: 'Chips Colors',
  dynamicComponent: SampleComponent,
  height: 51,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
