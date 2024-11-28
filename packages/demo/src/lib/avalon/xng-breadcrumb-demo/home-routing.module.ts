import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { ElementComponent } from './element.component';
import { HomeComponent } from './home.component';
import { SubcategoryComponent } from './subcategory.component';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent,
        data: { breadcrumb: { alias: 'Category' } },
        children: [
          {
            path: 'subcategory',
            component: SubcategoryComponent,
            data: { breadcrumb: { alias: 'Subcategory' } },
            children: [
              {
                path: 'element',
                component: ElementComponent,
                data: { breadcrumb: { alias: 'Element' } },
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
