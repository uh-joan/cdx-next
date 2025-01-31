import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from 'src/app/core/page/page.component';

import { AboutHelixComponent } from './about-helix.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutHelixComponent,
  },
];

@NgModule({
  declarations: [AboutHelixComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    PageComponent,
  ],
})
export class AboutHelixModule {}
