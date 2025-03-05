import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { ReleaseNotesComponent } from './release-notes.component';
import { ReleaseNotesService } from './release-notes.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v18',
    pathMatch: 'full',
  },
  {
    path: ':version',
    component: ReleaseNotesComponent,
  },
];

@NgModule({
  declarations: [ReleaseNotesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [ReleaseNotesService, provideHttpClient(withInterceptorsFromDi())],
})
export class ReleaseNotesModule {}
