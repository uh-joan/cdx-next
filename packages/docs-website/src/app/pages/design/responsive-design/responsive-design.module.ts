import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from 'src/app/core/page/page.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { ResponsiveDesignComponent } from './responsive-design.component';

export const routes: Routes = [
  {
    path: '',
    component: ResponsiveDesignComponent,
  },
];

@NgModule({
  declarations: [ResponsiveDesignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    MatTableModule,
  ],
})
export class ResponsiveDesignModule {}
