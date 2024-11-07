import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  BreadcrumbComponent as xngBreadcrumbComponent,
  BreadcrumbItemDirective,
} from 'xng-breadcrumb';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    RouterModule,
    xngBreadcrumbComponent,
    BreadcrumbItemDirective,
    MatIconModule,
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class CdxBreadcrumbModule {}
