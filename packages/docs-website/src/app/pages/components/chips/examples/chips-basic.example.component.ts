import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-set class="story">
    <mat-chip>John</mat-chip>
    <mat-chip>Paul</mat-chip>
    <mat-chip>George</mat-chip>
    <mat-chip>Ringo</mat-chip>
</mat-chip-set>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatChipsModule],
  styles: styleCode,
})
class SampleComponent {}

export const BasicChipsComponent: InputViewerComponent = {
  exampleName: 'Chips Basic',
  dynamicComponent: SampleComponent,
  height: 27,
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
    styles: styleCode,
})
class SampleComponent {}`,
};
