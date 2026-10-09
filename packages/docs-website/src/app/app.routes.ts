import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { OneTrustModule } from '@hlx/ngx-branding';

import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    providers: [
      importProvidersFrom(
        OneTrustModule.forRoot({
          domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
        }),
      ),
    ],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
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
      import('./pages/components/examples.routes').then(
        (m) => m.examplesRoutes,
      ),
  },
];
