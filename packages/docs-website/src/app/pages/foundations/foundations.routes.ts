import { Routes } from '@angular/router';

import { Foundations } from './foundations';

export const foundationsRoutes: Routes = [
  {
    path: '',
    component: Foundations,
    children: [
      {
        path: 'about-helix',
        loadComponent: () =>
          import('./about-helix/about-helix').then((m) => m.AboutHelix),
      },
      { path: '', redirectTo: 'about-helix', pathMatch: 'full' },
    ],
  },
];
