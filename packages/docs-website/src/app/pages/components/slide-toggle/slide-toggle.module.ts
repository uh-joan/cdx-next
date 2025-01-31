import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SlideToggleComponent } from './slide-toggle.component';

export const routes: Routes = [
  {
    path: '',
    component: SlideToggleComponent,
  },
];

@NgModule({
  declarations: [SlideToggleComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SlideToggleModule {}
