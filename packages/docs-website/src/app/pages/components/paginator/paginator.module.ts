import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { PaginatorComponent } from './paginator.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginatorComponent,
  },
];

@NgModule({
  declarations: [PaginatorComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class PaginatorModule {}
