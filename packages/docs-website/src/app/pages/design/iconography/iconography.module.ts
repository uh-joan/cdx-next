import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { IconographyComponent } from './iconography.component';

export const routes: Routes = [
  {
    path: '',
    component: IconographyComponent,
  },
];

@NgModule({
  declarations: [IconographyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    ExternalLinkComponent,
  ],
})
export class IconographyModule {}
