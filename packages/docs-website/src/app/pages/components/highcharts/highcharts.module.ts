import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { HighchartsComponent } from './highcharts.component';

export const routes: Routes = [
  {
    path: '',
    component: HighchartsComponent,
  },
];

@NgModule({
  declarations: [HighchartsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class HighchartsModule {}
