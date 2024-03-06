import { Route } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component').then(
            (m) => m.SearchComponent,
          ),
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./pages/results/results.component').then(
            (m) => m.ResultsComponent,
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'alumns',
        loadComponent: () =>
          import('./pages/alumns/alumns.component').then(
            (m) => m.AlumnsComponent,
          ),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./pages/account/account.component').then(
            (m) => m.AccountComponent,
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
      },
      {
        path: 'error',
        loadComponent: () =>
          import('./pages/error/error.component').then((m) => m.ErrorComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
