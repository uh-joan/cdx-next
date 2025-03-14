import { Routes } from '@angular/router';

import { DevelopmentComponent } from './development.component';

export const developmentRoutes: Routes = [
  {
    path: '',
    component: DevelopmentComponent,
    children: [
      {
        path: 'colors',
        loadComponent: () =>
          import('./colors/colors.component').then((m) => m.ColorsComponent),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography.component').then(
            (m) => m.TypographyComponent,
          ),
      },
      {
        path: 'elevation',
        loadComponent: () =>
          import('./elevation/elevation.component').then(
            (m) => m.ElevationComponent,
          ),
      },
      {
        path: 'density',
        loadComponent: () =>
          import('./density/density.component').then((m) => m.DensityComponent),
      },
      {
        path: 'contributing',
        loadComponent: () =>
          import('./contributing/contributing.component').then(
            (m) => m.ContributingComponent,
          ),
      },
      {
        path: 'getting-started-overview',
        loadComponent: () =>
          import(
            './getting-started-overview/getting-started-overview.component'
          ).then((m) => m.GettingStartedOverviewComponent),
      },
      {
        path: 'quick-start-new-project',
        loadComponent: () =>
          import(
            './quick-start-new-project/quick-start-new-project.component'
          ).then((m) => m.QuickStartNewProjectComponent),
      },
      {
        path: 'responsive-development',
        loadComponent: () =>
          import(
            './responsive-development/responsive-development.component'
          ).then((m) => m.ResponsiveDevelopmentComponent),
      },
      {
        path: 'migration-guide',
        loadComponent: () =>
          import('./migration-guide/migration-guide.component').then(
            (m) => m.MigrationGuideComponent,
          ),
      },
      {
        path: 'release-notes',
        loadComponent: () =>
          import('./release-notes/release-notes.component').then(
            (m) => m.ReleaseNotesComponent,
          ),
      },
      { path: '', redirectTo: 'getting-started-overview', pathMatch: 'full' },
    ],
  },
];
