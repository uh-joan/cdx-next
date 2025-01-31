import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { PatternLibraryComponent } from './pattern-library.component';

export const routes: Routes = [
  {
    path: '',
    component: PatternLibraryComponent,
  },
];

@NgModule({
  declarations: [PatternLibraryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageContentComponent],
})
export class PatternLibraryModule {}
