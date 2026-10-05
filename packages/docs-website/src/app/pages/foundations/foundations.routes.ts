import { Routes } from '@angular/router';

import { Foundations } from './foundations';

export const foundationsRoutes: Routes = [
  {
    path: '',
    component: Foundations,
    children: [
      {
        path: 'principles-and-foundations',
        loadComponent: () =>
          import('./principles-and-foundations/principles-and-foundations').then(
            (m) => m.PrinciplesAndFoundations,
          ),
      },
      {
        path: 'color',
        loadComponent: () => import('./color/color').then((m) => m.Color),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography').then((m) => m.Typography),
      },
      {
        path: 'iconography',
        loadComponent: () =>
          import('./iconography/iconography').then((m) => m.Iconography),
      },
      {
        path: 'branding',
        loadComponent: () =>
          import('./branding/branding').then((m) => m.Branding),
      },
      {
        path: 'elevation',
        loadComponent: () =>
          import('./elevation/elevation').then((m) => m.Elevation),
      },
      {
        path: 'density',
        loadComponent: () => import('./density/density').then((m) => m.Density),
      },
      {
        path: 'ai',
        loadComponent: () => import('./ai/ai').then((m) => m.Ai),
      },
      // Previous placeholder page.
      {
        path: 'about-helix',
        redirectTo: 'principles-and-foundations',
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'principles-and-foundations', pathMatch: 'full' },
    ],
  },
];
