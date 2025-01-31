import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { FigmaComponent } from './figma.component';

export const routes: Routes = [
  {
    path: '',
    component: FigmaComponent,
  },
];

@NgModule({
  declarations: [FigmaComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageContentComponent],
})
export class FigmaModule {}
