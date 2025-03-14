import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

const htmlCode = `<xng-breadcrumb separator=">" class="mat-body-medium">
  <ng-container *xngBreadcrumbItem="let breadcrumb; 
    let info = info; let first = first; let last = last">
    <mat-icon class="hlx-breadcrumb-home" 
      *ngIf="info">{{ info }}</mat-icon>
    <div class="hlx-breadcrumb-link" 
      *ngIf="!first && !last">{{ breadcrumb }}</div>
    <div class="hlx-breadcrumb-last" 
      *ngIf="last">{{ breadcrumb }}</div>
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

@Component({
  template: htmlCode,
  imports: [
    CommonModule,
    MatIconModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
  ],
  styles: styleCode,
})
class SampleComponent {}

export const ButtonsBasicdDefaultComponent: InputViewerComponent = {
  exampleName: 'Breadcrumbs Default',
  dynamicComponent: SampleComponent,
  height: 34,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { BreadcrumbComponent, 
  BreadcrumbItemDirective } from "xng-breadcrumb";
import {CommonModule} from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  template: htmlCode,
  imports: [
    CommonModule,
    MatIconModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective
  ],
  styles: styleCode,
})
class SampleComponent {}`,
};
