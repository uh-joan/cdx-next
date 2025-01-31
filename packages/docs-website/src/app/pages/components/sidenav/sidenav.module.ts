import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SidenavComponent } from './sidenav.component';

export const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
  },
];

@NgModule({
  declarations: [SidenavComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SidenavModule {}
