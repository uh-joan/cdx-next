import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'development',
    loadChildren: () =>
      import('./pages/development/development.module').then(
        (m) => m.DevelopmentModule,
      ),
  },
  {
    path: 'foundations',
    loadChildren: () =>
      import('./pages/foundations/foundations.module').then(
        (m) => m.FoundationsModule,
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./pages/components/components.module').then(
        (m) => m.ComponentsModule,
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'patterns',
    loadChildren: () =>
      import('./pages/patterns/patterns.module').then((m) => m.PatternsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      breadcrumb: {
        info: 'home',
      },
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
