import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { MenuComponent } from './menu.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [MenuComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class MenuModule {}
