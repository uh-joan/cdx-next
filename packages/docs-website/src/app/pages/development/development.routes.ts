import { Routes } from '@angular/router';

import { Development } from './development';
import { VersionResolver } from './release-notes/release-notes.version.resolver';

export const developmentRoutes: Routes = [
  {
    path: '',
    component: Development,
    children: [
      {
        path: 'colors',
        loadComponent: () => import('./colors/colors').then((m) => m.Colors),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography').then((m) => m.Typography),
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
        path: 'contributing',
        loadComponent: () =>
          import('./contributing/contributing').then((m) => m.Contributing),
      },
      {
        path: 'getting-started-overview',
        loadComponent: () =>
          import('./getting-started-overview/getting-started-overview').then(
            (m) => m.GettingStartedOverview,
          ),
      },
      {
        path: 'quick-start-new-project',
        loadComponent: () =>
          import('./quick-start-new-project/quick-start-new-project').then(
            (m) => m.QuickStartNewProject,
          ),
      },
      {
        path: 'responsive-development',
        loadComponent: () =>
          import('./responsive-development/responsive-development').then(
            (m) => m.ResponsiveDevelopment,
          ),
      },
      {
        path: 'migration-guide',
        loadComponent: () =>
          import('./migration-guide/migration-guide').then(
            (m) => m.MigrationGuide,
          ),
      },
      {
        path: 'release-notes',
        loadComponent: () =>
          import('./release-notes/release-notes').then((m) => m.ReleaseNotes),
        resolve: {
          version: VersionResolver,
        },
      },
      {
        path: 'release-notes/:version',
        loadComponent: () =>
          import('./release-notes/release-notes').then((m) => m.ReleaseNotes),
        resolve: {
          version: VersionResolver,
        },
      },
      { path: '', redirectTo: 'getting-started-overview', pathMatch: 'full' },
    ],
  },
];
