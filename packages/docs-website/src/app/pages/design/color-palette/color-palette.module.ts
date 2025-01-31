import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { ColorPaletteComponent } from './color-palette.component';

export const routes: Routes = [
  {
    path: '',
    component: ColorPaletteComponent,
  },
];

@NgModule({
  declarations: [ColorPaletteComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageContentComponent],
})
export class ColorPaletteModule {}
