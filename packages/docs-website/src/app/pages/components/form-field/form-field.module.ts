import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { FormFieldComponent } from './form-field.component';

export const routes: Routes = [
  {
    path: '',
    component: FormFieldComponent,
  },
];

@NgModule({
  declarations: [FormFieldComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class FormFieldModule {}
