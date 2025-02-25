import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { SkeletonLoaderComponent } from './skeleton-loader.component';

export const routes: Routes = [
  {
    path: '',
    component: SkeletonLoaderComponent,
  },
];

@NgModule({
  declarations: [SkeletonLoaderComponent],
  imports: [RouterModule.forChild(routes), PagesCommonModule, PageComponent],
})
export class SkeletonLoaderModule {}
