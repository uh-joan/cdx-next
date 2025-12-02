import { Routes } from '@angular/router';
import { ExamplesComponent } from 'src/app/core/example-page/example-page';

import { ComponentsComponent } from './components.component';
import { ExampleItemResolver } from './examples-item-resolver';
import { ExamplesResolver } from './examples-resolver';

export const componentsRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'components-overview',
        loadComponent: () =>
          import('./components-overview/components-overview.component').then(
            (m) => m.ComponentsOverviewComponent,
          ),
      },
      {
        path: 'autocomplete',
        loadComponent: () =>
          import('./autocomplete/autocomplete.component').then(
            (m) => m.AutocompleteComponent,
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./badge/badge.component').then((m) => m.BadgeComponent),
      },
      {
        path: 'breadcrumbs',
        loadComponent: () =>
          import('./breadcrumbs/breadcrumbs.component').then(
            (m) => m.BreadcrumbsComponent,
          ),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
      },
      {
        path: 'button-toggle',
        loadComponent: () =>
          import('./button-toggle/button-toggle.component').then(
            (m) => m.ButtonToggleComponent,
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./card/card.component').then((m) => m.CardComponent),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./checkbox/checkbox.component').then(
            (m) => m.CheckboxComponent,
          ),
      },
      {
        path: 'chips',
        loadComponent: () =>
          import('./chips/chips.component').then((m) => m.ChipsComponent),
      },
      {
        path: 'data-grid',
        loadComponent: () =>
          import('./data-grid/data-grid.component').then(
            (m) => m.DataGridComponent,
          ),
      },
      {
        path: 'date-picker',
        loadComponent: () =>
          import('./date-picker/date-picker.component').then(
            (m) => m.DatePickerComponent,
          ),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./dialog/dialog.component').then((m) => m.DialogComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./divider/divider.component').then((m) => m.DividerComponent),
      },
      {
        path: 'expansion-panel',
        loadComponent: () =>
          import('./expansion-panel/expansion-panel.component').then(
            (m) => m.ExpansionPanelComponent,
          ),
      },
      {
        path: 'footer',
        loadComponent: () =>
          import('./footer/footer.component').then((m) => m.FooterComponent),
      },
      {
        path: 'form-field',
        loadComponent: () =>
          import('./form-field/form-field.component').then(
            (m) => m.FormFieldComponent,
          ),
      },
      {
        path: 'header',
        loadComponent: () =>
          import('./header/header.component').then((m) => m.HeaderComponent),
      },
      {
        path: 'highcharts',
        loadComponent: () =>
          import('./highcharts/highcharts.component').then(
            (m) => m.HighchartsComponent,
          ),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./icons/icons.component').then((m) => m.IconsComponent),
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./menu/menu.component').then((m) => m.MenuComponent),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then(
            (m) => m.NotificationsComponent,
          ),
      },
      {
        path: 'paginator',
        loadComponent: () =>
          import('./paginator/paginator.component').then(
            (m) => m.PaginatorComponent,
          ),
      },
      {
        path: 'progress-bar',
        loadComponent: () =>
          import('./progress-bar/progress-bar.component').then(
            (m) => m.ProgressBarComponent,
          ),
      },
      {
        path: 'progress-spinner',
        loadComponent: () =>
          import('./progress-spinner/progress-spinner.component').then(
            (m) => m.ProgressSpinnerComponent,
          ),
      },
      {
        path: 'radio-button',
        loadComponent: () =>
          import('./radio-button/radio-button.component').then(
            (m) => m.RadioButtonComponent,
          ),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./select/select.component').then((m) => m.SelectComponent),
      },
      {
        path: 'sidenav',
        loadComponent: () =>
          import('./sidenav/sidenav.component').then((m) => m.SidenavComponent),
      },
      {
        path: 'skeleton-loader',
        loadComponent: () =>
          import('./skeleton-loader/skeleton-loader.component').then(
            (m) => m.SkeletonLoaderComponent,
          ),
      },
      {
        path: 'slide-toggle',
        loadComponent: () =>
          import('./slide-toggle/slide-toggle.component').then(
            (m) => m.SlideToggleComponent,
          ),
      },
      {
        path: 'slider',
        loadComponent: () =>
          import('./slider/slider.component').then((m) => m.SliderComponent),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./snackbar/snackbar.component').then(
            (m) => m.SnackbarComponent,
          ),
      },
      {
        path: 'sort-header',
        loadComponent: () =>
          import('./sort-header/sort-header.component').then(
            (m) => m.SortHeaderComponent,
          ),
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./stepper/stepper.component').then((m) => m.StepperComponent),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./table/table.component').then((m) => m.TableComponent),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./tabs/tabs.component').then((m) => m.TabsComponent),
      },
      {
        path: 'text-area',
        loadComponent: () =>
          import('./text-area/text-area.component').then(
            (m) => m.TextAreaComponent,
          ),
      },
      {
        path: 'text-input',
        loadComponent: () =>
          import('./text-input/text-input.component').then(
            (m) => m.TextInputComponent,
          ),
      },
      {
        path: 'time-picker',
        loadComponent: () =>
          import('./time-picker/time-picker.component').then(
            (c) => c.TimePickerComponent,
          ),
      },
      {
        path: 'toolbar',
        loadComponent: () =>
          import('./toolbar/toolbar.component').then((m) => m.ToolbarComponent),
      },
      {
        path: 'tooltips',
        loadComponent: () =>
          import('./tooltips/tooltips.component').then(
            (m) => m.TooltipsComponent,
          ),
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('./tree/tree.component').then((m) => m.TreeComponent),
      },
      { path: '', redirectTo: 'components-overview', pathMatch: 'full' },
    ],
  },
];

export const examplesRoutes: Routes = [
  {
    path: ':component',
    resolve: { examples: ExamplesResolver },
    children: [
      {
        path: '',
        component: ExamplesComponent,
      },
      {
        path: ':exampleName',
        component: ExamplesComponent,
        resolve: { examples: ExampleItemResolver },
      },
    ],
  },
];
