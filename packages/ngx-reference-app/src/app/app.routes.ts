import { Routes } from '@angular/router';

import { Layout } from '../core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'sandwich',
        loadComponent: () =>
          import('./pages/sandwich/sandwich').then((m) => m.Sandwitch),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
