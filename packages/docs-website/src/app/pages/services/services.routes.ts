import { Routes } from '@angular/router';

import { ServicesComponent } from './services.component';

export const servicesRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'analytics',
        loadComponent: () =>
          import('./analytics/analytics.component').then(
            (m) => m.AnalyticsComponent,
          ),
      },
      {
        path: 'authentication',
        loadComponent: () =>
          import('./authentication/authentication.component').then(
            (m) => m.AuthenticationComponent,
          ),
      },
      {
        path: 'services-overview',
        loadComponent: () =>
          import('./services-overview/services-overview.component').then(
            (m) => m.ServicesOverviewComponent,
          ),
      },
      {
        path: 'session-activity-management',
        loadComponent: () =>
          import(
            './session-activity-management/session-activity-management.component'
          ).then((m) => m.SessionActivityManagementComponent),
      },
      {
        path: 'translations',
        loadComponent: () =>
          import('./translations/translations.component').then(
            (m) => m.TranslationsComponent,
          ),
      },
      { path: '', redirectTo: 'services-overview', pathMatch: 'full' },
    ],
  },
];
