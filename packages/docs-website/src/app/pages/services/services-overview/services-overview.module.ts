import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from 'src/app/core/page/page.component';

import { ServicesOverviewComponent } from './services-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ServicesOverviewComponent,
  },
];

@NgModule({
  declarations: [ServicesOverviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageComponent],
})
export class ServicesOverviewModule {}
