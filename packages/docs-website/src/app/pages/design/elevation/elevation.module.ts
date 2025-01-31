import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CdxDoComponent } from 'src/app/components/cdx-do/cdx-do.component';
import { CdxDontComponent } from 'src/app/components/cdx-dont/cdx-dont.component';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { ElevationComponent } from './elevation.component';

export const routes: Routes = [
  {
    path: '',
    component: ElevationComponent,
  },
];

@NgModule({
  declarations: [ElevationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageContentComponent,
    ExternalLinkComponent,
    MatIconModule,
    CdxDontComponent,
    CdxDoComponent,
  ],
})
export class ElevationModule {}
