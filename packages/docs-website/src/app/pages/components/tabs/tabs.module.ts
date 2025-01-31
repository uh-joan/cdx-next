import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TabsComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
];

@NgModule({
  declarations: [TabsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TabsModule {}
