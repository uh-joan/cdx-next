import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { InternalLinkComponent } from 'src/app/components/internal-link/internal-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { MigrationGuideComponent } from './migration-guide.component';

export const routes: Routes = [
  {
    path: '',
    component: MigrationGuideComponent,
  },
];

@NgModule({
  declarations: [MigrationGuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    MatDividerModule,
    ExternalLinkComponent,
    InternalLinkComponent,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    HighlightComponent,
  ],
})
export class MigrationGuideModule {}
