import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { ChipsComponent } from './chips.component';

export const routes: Routes = [
  {
    path: '',
    component: ChipsComponent,
  },
];

@NgModule({
  declarations: [ChipsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class ChipsModule {}
