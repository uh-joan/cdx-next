import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { AuthenticationComponent } from './authentication.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
  },
];

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    HighlightComponent,
    MatDividerModule,
    ExternalLinkComponent,
  ],
})
export class AuthenticationModule {}
