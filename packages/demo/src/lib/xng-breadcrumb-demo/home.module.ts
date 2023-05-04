import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CdxBreadcrumbModule } from '@cdx/theme-xng-breadcrumb';

import { CategoryComponent } from './category.component';
import { ElementComponent } from './element.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SubcategoryComponent } from './subcategory.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    SubcategoryComponent,
    ElementComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CdxBreadcrumbModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
