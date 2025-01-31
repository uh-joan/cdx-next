import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TreeComponent } from './tree.component';

export const routes: Routes = [
  {
    path: '',
    component: TreeComponent,
  },
];

@NgModule({
  declarations: [TreeComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TreeModule {}
