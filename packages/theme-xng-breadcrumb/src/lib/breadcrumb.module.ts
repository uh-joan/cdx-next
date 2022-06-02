import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [CommonModule, BreadcrumbModule, MatIconModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class CdxBreadcrumbModule {}
