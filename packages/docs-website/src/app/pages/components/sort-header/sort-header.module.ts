import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SortHeaderComponent } from './sort-header.component';

export const routes: Routes = [
  {
    path: '',
    component: SortHeaderComponent,
  },
];

@NgModule({
  declarations: [SortHeaderComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SortHeaderModule {}
