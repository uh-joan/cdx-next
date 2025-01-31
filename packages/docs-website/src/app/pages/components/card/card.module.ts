import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { CardComponent } from './card.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
];

@NgModule({
  declarations: [CardComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class CardModule {}
