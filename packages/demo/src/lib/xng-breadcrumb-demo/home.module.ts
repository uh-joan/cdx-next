import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CdxBreadcrumbModule } from '@cdx/theme-xng-breadcrumb';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { Page1Component } from './page-1.component';
import { Page2Component } from './page-2.component';
import { Page3Component } from './page-3.component';

@NgModule({
  declarations: [HomeComponent, Page1Component, Page2Component, Page3Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CdxBreadcrumbModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
