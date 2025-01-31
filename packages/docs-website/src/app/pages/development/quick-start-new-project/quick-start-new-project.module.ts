import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { InternalLinkComponent } from 'src/app/components/internal-link/internal-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { QuickStartNewProjectComponent } from './quick-start-new-project.component';

export const routes: Routes = [
  {
    path: '',
    component: QuickStartNewProjectComponent,
  },
];

@NgModule({
  declarations: [QuickStartNewProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
    InternalLinkComponent,
    HighlightComponent,
    MatTableModule,
    MatDividerModule,
  ],
})
export class QuickStartNewProjectModule {}
