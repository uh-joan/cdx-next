import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SliderComponent } from './slider.component';

export const routes: Routes = [
  {
    path: '',
    component: SliderComponent,
  },
];

@NgModule({
  declarations: [SliderComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SliderModule {}
