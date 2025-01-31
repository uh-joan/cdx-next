import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { TextInputComponent } from './text-input.component';

export const routes: Routes = [
  {
    path: '',
    component: TextInputComponent,
  },
];

@NgModule({
  declarations: [TextInputComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class TextInputModule {}
