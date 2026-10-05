import { Routes } from '@angular/router';

import { Patterns } from './patterns';

export const patternsRoutes: Routes = [
  {
    path: '',
    component: Patterns,
    children: [
      {
        path: 'filters',
        loadComponent: () =>
          import('./filters/filters-overview/filters-overview').then(
            (m) => m.FiltersOverview,
          ),
      },
      {
        path: 'filters/basic-filters',
        loadComponent: () =>
          import('./filters/basic-filters/basic-filters').then(
            (m) => m.BasicFilters,
          ),
      },
      {
        path: 'filters/filter-modal',
        loadComponent: () =>
          import('./filters/filter-modal/filter-modal').then(
            (m) => m.FilterModal,
          ),
      },
      {
        path: 'filters/filter-panel',
        loadComponent: () =>
          import('./filters/filter-panel/filter-panel').then(
            (m) => m.FilterPanel,
          ),
      },
      {
        path: 'sidebar',
        loadComponent: () =>
          import('./sidebar/sidebar-overview/sidebar-overview').then(
            (m) => m.SidebarOverview,
          ),
      },
      {
        path: 'sidebar/header-with-navigation',
        loadComponent: () =>
          import('./sidebar/header-with-navigation/header-with-navigation').then(
            (m) => m.HeaderWithNavigation,
          ),
      },
      {
        path: 'sidebar/nested-navigation',
        loadComponent: () =>
          import('./sidebar/nested-navigation/nested-navigation').then(
            (m) => m.NestedNavigation,
          ),
      },
      {
        path: 'sidebar/products',
        loadComponent: () =>
          import('./sidebar/sidebar-products/sidebar-products').then(
            (m) => m.SidebarProducts,
          ),
      },
      {
        path: 'page-states',
        loadComponent: () =>
          import('./page-states/page-states').then((m) => m.PageStates),
      },
      {
        path: 'dialogs',
        loadComponent: () =>
          import('./dialogs/dialogs').then((m) => m.Dialogs),
      },
      // Previous placeholder page.
      {
        path: 'patterns-overview',
        redirectTo: 'filters',
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'filters', pathMatch: 'full' },
    ],
  },
];
