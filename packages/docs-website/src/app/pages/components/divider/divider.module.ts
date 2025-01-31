import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { DividerComponent } from './divider.component';

export const routes: Routes = [
  {
    path: '',
    component: DividerComponent,
  },
];

@NgModule({
  declarations: [DividerComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class DividerModule {}
