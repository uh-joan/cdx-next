import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-paginator
        length="100"
        pageSize="100"
        [pageSizeOptions]="[5,10,25,100]"
        aria-label="Select page"
    ></mat-paginator>
</div>`;

const styleCode = `.story {
}`;

@Component({
  template: htmlCode,
  imports: [MatPaginator],
  styles: [styleCode],
})
class SampleComponent {}

export const PaginatorBasicComponent: InputViewerComponent = {
  exampleName: 'Paginator',
  dynamicComponent: SampleComponent,
  height: 25,
  verticalView: true,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    template: htmlCode,
    imports: [
        MatPaginator
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
