import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { FoundationsComponent } from './foundations.component';

const routes: Routes = [
  {
    path: '',
    component: FoundationsComponent,
    children: [
      {
        path: 'about-helix',
        loadChildren: () =>
          import('./about-helix/about-helix.module').then(
            (m) => m.AboutHelixModule,
          ),
      },
      { path: '', redirectTo: 'about-helix', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [FoundationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LeftNavigationComponent,
  ],
})
export class FoundationsModule {}
