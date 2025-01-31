import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { PatternsComponent } from './patterns.component';

const routes: Routes = [
  {
    path: '',
    component: PatternsComponent,
  },
];

@NgModule({
  declarations: [PatternsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LeftNavigationComponent,
  ],
})
export class PatternsModule {}
