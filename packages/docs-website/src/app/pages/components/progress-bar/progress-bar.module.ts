import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { ProgressBarComponent } from './progress-bar.component';

export const routes: Routes = [
  {
    path: '',
    component: ProgressBarComponent,
  },
];

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class ProgressBarModule {}
