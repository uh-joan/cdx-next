import { Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        data: {
          breadcrumb: {
            info: 'home',
          },
        },
      },
      {
        path: 'development',
        loadChildren: () =>
          import('./pages/development/development.routes').then(
            (m) => m.developmentRoutes,
          ),
      },
      {
        path: 'foundations',
        loadChildren: () =>
          import('./pages/foundations/foundations.routes').then(
            (m) => m.foundationsRoutes,
          ),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./pages/components/components.routes').then(
            (m) => m.componentsRoutes,
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./pages/services/services.routes').then(
            (m) => m.servicesRoutes,
          ),
      },
      {
        path: 'patterns',
        loadChildren: () =>
          import('./pages/patterns/patterns.routes').then(
            (m) => m.patternsRoutes,
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./pages/components/components.routes').then(
        (m) => m.examplesRoutes,
      ),
  },
];
