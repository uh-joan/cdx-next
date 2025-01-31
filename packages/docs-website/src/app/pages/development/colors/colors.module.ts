import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { ColorPillComponent } from 'src/app/components/color-pill/color-pill.component';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { InternalLinkComponent } from 'src/app/components/internal-link/internal-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { ColorsComponent } from './colors.component';

export const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
  },
];

@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
    InternalLinkComponent,
    HighlightComponent,
    MatDividerModule,
    ColorPillComponent,
    MatTableModule,
  ],
})
export class ColorsModule {}
