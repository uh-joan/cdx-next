import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { ButtonsComponent } from './buttons.component';

export const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  },
];

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    RouterModule.forChild(routes),
    PagesCommonModule,
    PageComponent,
    MatDividerModule,
  ],
})
export class ButtonsModule {}
