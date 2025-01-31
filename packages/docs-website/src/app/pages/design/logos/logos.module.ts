import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { LogosComponent } from './logos.component';

export const routes: Routes = [
  {
    path: '',
    component: LogosComponent,
  },
];

@NgModule({
  declarations: [LogosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    ExternalLinkComponent,
  ],
})
export class LogosModule {}
