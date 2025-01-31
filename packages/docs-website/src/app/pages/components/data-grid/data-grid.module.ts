import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { DataGridComponent } from './data-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: DataGridComponent,
  },
];

@NgModule({
  declarations: [DataGridComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class DataGridModule {}
