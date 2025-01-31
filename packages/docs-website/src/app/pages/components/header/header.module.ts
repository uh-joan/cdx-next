import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { HeaderComponent } from './header.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class HeaderModule {}
