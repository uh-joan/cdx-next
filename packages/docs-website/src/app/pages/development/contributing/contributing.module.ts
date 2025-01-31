import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { ContributingComponent } from './contributing.component';

export const routes: Routes = [
  {
    path: '',
    component: ContributingComponent,
  },
];

@NgModule({
  declarations: [ContributingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ExternalLinkComponent,
    MatDividerModule,
    PageComponent,
  ],
})
export class ContributingModule {}
