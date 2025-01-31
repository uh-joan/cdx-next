import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { ResponsiveDevelopmentComponent } from './responsive-development.component';

export const routes: Routes = [
  {
    path: '',
    component: ResponsiveDevelopmentComponent,
  },
];

@NgModule({
  declarations: [ResponsiveDevelopmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
  ],
})
export class ResponsiveDevelopmentModule {}
