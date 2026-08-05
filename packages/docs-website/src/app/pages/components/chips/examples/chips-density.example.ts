import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-set class="hlx-chip-small">
    <mat-chip class="hlx-primary-chip"
        >primary</mat-chip>
    <mat-chip class="hlx-accent-chip"
        >accent</mat-chip>
    <mat-chip class="hlx-negative-chip"
        >negative</mat-chip>
    <mat-chip class="hlx-warn-chip" 
        color="primary">warn</mat-chip>
    <mat-chip class="hlx-positive-chip" 
        color="accent">positive</mat-chip>
    <mat-chip class="hlx-info-chip" 
        color="warn">info</mat-chip>
    <mat-chip class="hlx-neutral-chip"
        >neutral</mat-chip>
    <mat-chip class="hlx-outlined-chip"
        >outlined</mat-chip>
</mat-chip-set>
<mat-chip-set class="hlx-chip-xsmall">
    <mat-chip class="hlx-primary-chip"
        >primary</mat-chip>
    <mat-chip class="hlx-accent-chip"
        >accent</mat-chip>
    <mat-chip class="hlx-negative-chip"
        >negative</mat-chip>
    <mat-chip class="hlx-warn-chip"
        color="primary">warn</mat-chip>
    <mat-chip class="hlx-positive-chip" 
        color="accent">positive</mat-chip>
    <mat-chip class="hlx-info-chip" 
        color="warn">info</mat-chip>
    <mat-chip class="hlx-neutral-chip"
        >neutral</mat-chip>
    <mat-chip class="hlx-outlined-chip"
        >outlined</mat-chip>
</mat-chip-set>`;

const styleCode = `.story {
    padding: 1rem;
}`;

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
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    template: htmlCode,
    imports: [
        MatChipsModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
