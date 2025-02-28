import { CommonModule } from '@angular/common';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { ReleaseNoteComponent } from './release-note.component';
import { ReleaseNoteService } from './release-note.service';

export const routes: Routes = [
  {
    path: '',
    component: ReleaseNoteComponent,
  },
];

@NgModule({
  declarations: [ReleaseNoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
  ],
  providers: [ReleaseNoteService, provideHttpClient(withInterceptorsFromDi())],
})
export class RleaseNoteModule {}
