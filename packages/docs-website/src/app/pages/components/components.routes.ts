import { Routes } from '@angular/router';

import { Components } from './components';

export const componentsRoutes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      {
        path: 'components-overview',
        loadComponent: () =>
          import('./components-overview/components-overview').then(
            (m) => m.ComponentsOverview,
          ),
      },
      {
        path: 'autocomplete',
        loadComponent: () =>
          import('./autocomplete/autocomplete').then((m) => m.Autocomplete),
      },
      {
        path: 'badge',
        loadComponent: () => import('./badge/badge').then((m) => m.Badge),
      },
      {
        path: 'breadcrumbs',
        loadComponent: () =>
          import('./breadcrumbs/breadcrumbs').then((m) => m.Breadcrumbs),
      },
      {
        path: 'buttons',
        loadComponent: () => import('./buttons/buttons').then((m) => m.Buttons),
      },
      {
        path: 'button-toggle',
        loadComponent: () =>
          import('./button-toggle/button-toggle').then((m) => m.ButtonToggle),
      },
      {
        path: 'card',
        loadComponent: () => import('./card/card').then((m) => m.Card),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./checkbox/checkbox').then((m) => m.Checkbox),
      },
      {
        path: 'chips',
        loadComponent: () => import('./chips/chips').then((m) => m.Chips),
      },
      {
        path: 'data-grid',
        loadComponent: () =>
          import('./data-grid/data-grid').then((m) => m.DataGrid),
      },
      {
        path: 'date-picker',
        loadComponent: () =>
          import('./date-picker/date-picker').then((m) => m.DatePicker),
      },
      {
        path: 'dialog',
        loadComponent: () => import('./dialog/dialog').then((m) => m.Dialog),
      },
      {
        path: 'divider',
        loadComponent: () => import('./divider/divider').then((m) => m.Divider),
      },
      {
        path: 'expansion-panel',
        loadComponent: () =>
          import('./expansion-panel/expansion-panel').then(
            (m) => m.ExpansionPanel,
          ),
      },
      {
        path: 'footer',
        loadComponent: () => import('./footer/footer').then((m) => m.Footer),
      },
      {
        path: 'form-field',
        loadComponent: () =>
          import('./form-field/form-field').then((m) => m.FormField),
      },
      {
        path: 'header',
        loadComponent: () => import('./header/header').then((m) => m.Header),
      },
      {
        path: 'highcharts',
        loadComponent: () =>
          import('./highcharts/highcharts').then((m) => m.Highcharts),
      },
      {
        path: 'hyperlink',
        loadComponent: () =>
          import('./hyperlink/hyperlink').then((m) => m.Hyperlink),
      },
      {
        path: 'icons',
        loadComponent: () => import('./icons/icons').then((m) => m.Icons),
      },
      {
        path: 'list',
        loadComponent: () => import('./list/list').then((m) => m.List),
      },
      {
        path: 'menu',
        loadComponent: () => import('./menu/menu').then((m) => m.Menu),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications').then((m) => m.Notifications),
      },
      {
        path: 'paginator',
        loadComponent: () =>
          import('./paginator/paginator').then((m) => m.Paginator),
      },
      {
        path: 'progress-bar',
        loadComponent: () =>
          import('./progress-bar/progress-bar').then((m) => m.ProgressBar),
      },
      {
        path: 'progress-spinner',
        loadComponent: () =>
          import('./progress-spinner/progress-spinner').then(
            (m) => m.ProgressSpinner,
          ),
      },
      {
        path: 'radio-button',
        loadComponent: () =>
          import('./radio-button/radio-button').then((m) => m.RadioButton),
      },
      {
        path: 'select',
        loadComponent: () => import('./select/select').then((m) => m.Select),
      },
      {
        path: 'sidenav',
        loadComponent: () => import('./sidenav/sidenav').then((m) => m.Sidenav),
      },
      {
        path: 'skeleton-loader',
        loadComponent: () =>
          import('./skeleton-loader/skeleton-loader').then(
            (m) => m.SkeletonLoader,
          ),
      },
      {
        path: 'slide-toggle',
        loadComponent: () =>
          import('./slide-toggle/slide-toggle').then((m) => m.SlideToggle),
      },
      {
        path: 'slider',
        loadComponent: () => import('./slider/slider').then((m) => m.Slider),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./snackbar/snackbar').then((m) => m.Snackbar),
      },
      {
        path: 'sort-header',
        loadComponent: () =>
          import('./sort-header/sort-header').then((m) => m.SortHeader),
      },
      {
        path: 'stepper',
        loadComponent: () => import('./stepper/stepper').then((m) => m.Stepper),
      },
      {
        path: 'table',
        loadComponent: () => import('./table/table').then((m) => m.Table),
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs').then((m) => m.Tabs),
      },
      {
        path: 'text-area',
        loadComponent: () =>
          import('./text-area/text-area').then((m) => m.TextArea),
      },
      {
        path: 'text-input',
        loadComponent: () =>
          import('./text-input/text-input').then((m) => m.TextInput),
      },
      {
        path: 'time-picker',
        loadComponent: () =>
          import('./time-picker/time-picker').then((m) => m.TimePicker),
      },
      {
        path: 'toolbar',
        loadComponent: () => import('./toolbar/toolbar').then((m) => m.Toolbar),
      },
      {
        path: 'tooltips',
        loadComponent: () =>
          import('./tooltips/tooltips').then((m) => m.Tooltips),
      },
      {
        path: 'tree',
        loadComponent: () => import('./tree/tree').then((m) => m.Tree),
      },
      { path: '', redirectTo: 'components-overview', pathMatch: 'full' },
    ],
  },
];
