import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { Page1Component } from './page-1.component';
import { Page2Component } from './page-2.component';
import { Page3Component } from './page-3.component';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'page-1',
        component: Page1Component,
        data: { breadcrumb: { alias: 'Page1' } },
        children: [
          {
            path: 'page-2',
            component: Page2Component,
            data: { breadcrumb: { alias: 'Page2' } },
            children: [
              {
                path: 'page-3',
                component: Page3Component,
                data: { breadcrumb: { alias: 'Page3' } },
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
