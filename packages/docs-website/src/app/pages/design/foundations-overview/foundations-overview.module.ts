import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardBComponent } from 'src/app/components/card-b/card-b.component';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { FoundationsOverviewComponent } from './foundations-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: FoundationsOverviewComponent,
  },
];

@NgModule({
  declarations: [FoundationsOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    ExternalLinkComponent,
    CardBComponent,
  ],
})
export class FoundationsOverviewModule {}
