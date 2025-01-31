import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'analytics',
        loadChildren: () =>
          import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule,
          ),
      },
      {
        path: 'services-overview',
        loadChildren: () =>
          import('./services-overview/services-overview.module').then(
            (m) => m.ServicesOverviewModule,
          ),
      },
      {
        path: 'session-activity-management',
        loadChildren: () =>
          import(
            './session-activity-management/session-activity-management.module'
          ).then((m) => m.SessionActivityManagementModule),
      },
      {
        path: 'translations',
        loadChildren: () =>
          import('./translations/translations.module').then(
            (m) => m.TranslationsModule,
          ),
      },
      { path: '', redirectTo: 'services-overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LeftNavigationComponent,
  ],
})
export class ServicesModule {}
