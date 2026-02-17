import { Routes } from '@angular/router';

import { Services } from './services';

export const servicesRoutes: Routes = [
  {
    path: '',
    component: Services,
    children: [
      {
        path: 'analytics',
        loadComponent: () =>
          import('./analytics/analytics').then((m) => m.Analytics),
      },
      {
        path: 'authentication',
        loadComponent: () =>
          import('./authentication/authentication').then(
            (m) => m.Authentication,
          ),
      },
      {
        path: 'services-overview',
        loadComponent: () =>
          import('./services-overview/services-overview').then(
            (m) => m.ServicesOverview,
          ),
      },
      {
        path: 'session-activity-management',
        loadComponent: () =>
          import('./session-activity-management/session-activity-management').then(
            (m) => m.SessionActivityManagement,
          ),
      },
      {
        path: 'oti-snippet',
        loadComponent: () =>
          import('./oti-snippet/oti-snippet').then((c) => c.OtiSnippet),
      },
      {
        path: 'translations',
        loadComponent: () =>
          import('./translations/translations').then((m) => m.Translations),
      },
      { path: '', redirectTo: 'services-overview', pathMatch: 'full' },
    ],
  },
];
