import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<xng-breadcrumb separator=">" class="mat-body-medium">
  <ng-container *xngBreadcrumbItem="let breadcrumb; 
    let info = info; let first = first; let last = last">
    @if (info) {
      <mat-icon class="hlx-breadcrumb-home">{{ info }}</mat-icon>
    }
    @if (!first && !last) {
      <div class="hlx-breadcrumb-link">{{ breadcrumb }}</div>
    }
    @if (last) {
      <div class="hlx-breadcrumb-last">{{ breadcrumb }}</div>
    }
  </ng-container>
</xng-breadcrumb>`;
const styleCode = `.hlx-breadcrumb-home {
  transform: scale(0.75);
}
.hlx-breadcrumb-last {
  font-weight: 600
}
.hlx-breadcrumb-link {
  color: #5F6368
}
`;

const tsCode = `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumbs-example',
  templateUrl: './breadcrumbs-example.html',
  styleUrl: './breadcrumbs-example.scss',
  imports: [MatIcon, BreadcrumbComponent, BreadcrumbItemDirective],
})
export class BreadcrumbsExample {}`;

@Component({
  template: htmlCode,
  imports: [MatIconModule, BreadcrumbComponent, BreadcrumbItemDirective],
  styles: [styleCode],
})
class SampleComponent {}

export const BreadcrumbsDefaultComponent: InputViewerComponent = {
  exampleName: 'Breadcrumbs Default',
  dynamicComponent: SampleComponent,
  height: 34,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
