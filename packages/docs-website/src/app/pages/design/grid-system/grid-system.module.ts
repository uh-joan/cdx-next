import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalLinkComponent } from 'src/app/components/internal-link/internal-link.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { GridSystemComponent } from './grid-system.component';

export const routes: Routes = [
  {
    path: '',
    component: GridSystemComponent,
  },
];

@NgModule({
  declarations: [GridSystemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    RouterModule,
    InternalLinkComponent,
  ],
})
export class GridSystemModule {}
