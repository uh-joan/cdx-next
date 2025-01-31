import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from '../../../core/page/page.component';
import { ComponentsOverviewComponent } from './components-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ComponentsOverviewComponent,
  },
];

@NgModule({
  declarations: [ComponentsOverviewComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    PageComponent,
  ],
})
export class ComponentsOverviewModule {}
