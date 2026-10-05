import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-set class="hlx-density--1">
    <mat-chip class="hlx-primary-chip"
        >primary</mat-chip>
    <mat-chip class="hlx-accent-chip"
        >accent</mat-chip>
    <mat-chip class="hlx-negative-chip"
        >negative</mat-chip>
    <mat-chip class="hlx-warn-chip" 
        >warn</mat-chip>
    <mat-chip class="hlx-positive-chip" 
        >positive</mat-chip>
    <mat-chip class="hlx-info-chip" 
        >info</mat-chip>
    <mat-chip class="hlx-neutral-chip"
        >neutral</mat-chip>
    <mat-chip class="hlx-outlined-chip"
        >outlined</mat-chip>
</mat-chip-set>
<mat-chip-set class="hlx-density--2">
    <mat-chip class="hlx-primary-chip"
        >primary</mat-chip>
    <mat-chip class="hlx-accent-chip"
        >accent</mat-chip>
    <mat-chip class="hlx-negative-chip"
        >negative</mat-chip>
    <mat-chip class="hlx-warn-chip"
        >warn</mat-chip>
    <mat-chip class="hlx-positive-chip" 
        >positive</mat-chip>
    <mat-chip class="hlx-info-chip" 
        >info</mat-chip>
    <mat-chip class="hlx-neutral-chip"
        >neutral</mat-chip>
    <mat-chip class="hlx-outlined-chip"
        >outlined</mat-chip>
</mat-chip-set>`;

const styleCode = `.story {
    padding: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

// Density is set with hlx-density--1 / hlx-density--2 on the mat-chip-set.
@Component({
  selector: 'app-chips-density-example',
  templateUrl: './chips-density-example.html',
  styleUrl: './chips-density-example.scss',
  imports: [MatChipsModule],
})
export class ChipsDensityExample {}`;

@Component({
  template: htmlCode,
  imports: [MatChipsModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ChipsDensityComponent: InputViewerComponent = {
  exampleName: 'Chips Density',
  dynamicComponent: SampleComponent,
  height: 63,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
