import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { DialogComponent } from './dialog.component';

export const routes: Routes = [
  {
    path: '',
    component: DialogComponent,
  },
];

@NgModule({
  declarations: [DialogComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class DialogModule {}
