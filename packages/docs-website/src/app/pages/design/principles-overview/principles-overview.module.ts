import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAComponent } from 'src/app/components/card-a/card-a.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { PrinciplesOverviewComponent } from './principles-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: PrinciplesOverviewComponent,
  },
];

@NgModule({
  declarations: [PrinciplesOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    CardAComponent,
  ],
})
export class PrinciplesOverviewModule {}
