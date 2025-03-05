import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelixFooterModule } from '@cdx/ngx-branding';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { DevelopmentComponent } from './development.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentComponent,
    children: [
      {
        path: 'colors',
        loadChildren: () =>
          import('./colors/colors.module').then((m) => m.ColorsModule),
      },
      {
        path: 'typography',
        loadChildren: () =>
          import('./typography/typography.module').then(
            (m) => m.TypographyModule,
          ),
      },
      {
        path: 'elevation',
        loadChildren: () =>
          import('./elevation/elevation.module').then((m) => m.ElevationModule),
      },
      {
        path: 'density',
        loadChildren: () =>
          import('./density/density.module').then((m) => m.DensityModule),
      },
      {
        path: 'contributing',
        loadChildren: () =>
          import('./contributing/contributing.module').then(
            (m) => m.ContributingModule,
          ),
      },
      {
        path: 'getting-started-overview',
        loadChildren: () =>
          import(
            './getting-started-overview/getting-started-overview.module'
          ).then((m) => m.GettingStartedOverviewModule),
      },
      {
        path: 'quick-start-new-project',
        loadChildren: () =>
          import(
            './quick-start-new-project/quick-start-new-project.module'
          ).then((m) => m.QuickStartNewProjectModule),
      },
      {
        path: 'responsive-development',
        loadChildren: () =>
          import('./responsive-development/responsive-development.module').then(
            (m) => m.ResponsiveDevelopmentModule,
          ),
      },
      {
        path: 'release-notes',
        loadChildren: () =>
          import('./release-notes/release-notes.module').then(
            (m) => m.ReleaseNotesModule,
          ),
      },
      { path: '', redirectTo: 'getting-started-overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [DevelopmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LeftNavigationComponent,
    HelixFooterModule,
  ],
})
export class DevelopmentModule {}
