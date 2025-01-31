import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TextAreaComponent } from './text-area.component';

export const routes: Routes = [
  {
    path: '',
    component: TextAreaComponent,
  },
];

@NgModule({
  declarations: [TextAreaComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TextAreaModule {}
