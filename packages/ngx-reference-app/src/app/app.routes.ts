import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sandwich',
    loadChildren: () =>
      import('./pages/sandwich/sandwich.module').then((m) => m.SandwichModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
