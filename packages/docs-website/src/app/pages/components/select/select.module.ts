import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SelectComponent } from './select.component';

export const routes: Routes = [
  {
    path: '',
    component: SelectComponent,
  },
];

@NgModule({
  declarations: [SelectComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SelectModule {}
