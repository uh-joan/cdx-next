import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { DatePickerComponent } from './date-picker.component';

export const routes: Routes = [
  {
    path: '',
    component: DatePickerComponent,
  },
];

@NgModule({
  declarations: [DatePickerComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class DatePickerModule {}
