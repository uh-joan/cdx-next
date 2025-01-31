import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { CheckboxComponent } from './checkbox.component';

export const routes: Routes = [
  {
    path: '',
    component: CheckboxComponent,
  },
];

@NgModule({
  declarations: [CheckboxComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class CheckboxModule {}
