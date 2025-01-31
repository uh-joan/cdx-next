import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { FooterComponent } from './footer.component';

export const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
  },
];

@NgModule({
  declarations: [FooterComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class FooterModule {}
