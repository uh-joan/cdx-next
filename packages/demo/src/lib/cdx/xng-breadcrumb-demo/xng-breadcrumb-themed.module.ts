import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from 'xng-breadcrumb';

import { XngBreadcrumbThemedComponent } from './xng-breadcrumb-themed.component';
import { BreadcrumbRoutingModule } from './xng-breadcrumb-themed-routing.module';

@NgModule({
  declarations: [XngBreadcrumbThemedComponent],
  imports: [BreadcrumbRoutingModule, BreadcrumbComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  exports: [XngBreadcrumbThemedComponent],
})
export class BreadcrumbDemoModule {}
