import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TableComponent } from './table.component';

export const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
];

@NgModule({
  declarations: [TableComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TableModule {}
