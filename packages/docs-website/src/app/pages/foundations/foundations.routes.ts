import { Routes } from '@angular/router';

import { FoundationsComponent } from './foundations.component';

export const foundationsRoutes: Routes = [
  {
    path: '',
    component: FoundationsComponent,
    children: [
      {
        path: 'about-helix',
        loadComponent: () =>
          import('./about-helix/about-helix.component').then(
            (m) => m.AboutHelixComponent,
          ),
      },
      { path: '', redirectTo: 'about-helix', pathMatch: 'full' },
    ],
  },
];
