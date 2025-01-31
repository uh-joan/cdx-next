import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { PageComponent } from 'src/app/core/page/page.component';

import { SessionActivityManagementComponent } from './session-activity-management.component';

export const routes: Routes = [
  {
    path: '',
    component: SessionActivityManagementComponent,
  },
];

@NgModule({
  declarations: [SessionActivityManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageComponent,
    HighlightComponent,
    MatDividerModule,
  ],
})
export class SessionActivityManagementModule {}
