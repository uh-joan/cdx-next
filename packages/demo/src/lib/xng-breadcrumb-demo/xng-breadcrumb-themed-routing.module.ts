import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'xng-breadcrumb-demo' },
  {
    path: 'xng-breadcrumb-demo',
    loadChildren: () => import('./home.module').then((m) => m.HomeModule),
    data: {
      breadcrumb: {
        label: 'Home',
        info: 'home',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class BreadcrumbRoutingModule {}
