import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SnackbarComponent } from './snackbar.component';

export const routes: Routes = [
  {
    path: '',
    component: SnackbarComponent,
  },
];

@NgModule({
  declarations: [SnackbarComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SnackbarModule {}
