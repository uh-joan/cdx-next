import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';

export const routes: Routes = [
  {
    path: '',
    component: ProgressSpinnerComponent,
  },
];

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class ProgressSpinnerModule {}
