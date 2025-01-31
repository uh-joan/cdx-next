import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { IconsComponent } from './icons.component';

export const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
  },
];

@NgModule({
  declarations: [IconsComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class IconsModule {}
