import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { NotificationsComponent } from './notifications.component';

export const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
  },
];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class NotificationsModule {}
