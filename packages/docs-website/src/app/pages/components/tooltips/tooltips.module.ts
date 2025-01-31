import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TooltipsComponent } from './tooltips.component';

export const routes: Routes = [
  {
    path: '',
    component: TooltipsComponent,
  },
];

@NgModule({
  declarations: [TooltipsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TooltipsModule {}
