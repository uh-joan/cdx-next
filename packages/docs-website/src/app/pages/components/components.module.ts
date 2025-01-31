import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'components-overview',
        loadChildren: () =>
          import('./components-overview/components-overview.module').then(
            (m) => m.ComponentsOverviewModule,
          ),
      },
      {
        path: 'autocomplete',
        loadChildren: () =>
          import('./autocomplete/autocomplete.module').then(
            (m) => m.AutocompleteModule,
          ),
      },
      {
        path: 'badge',
        loadChildren: () =>
          import('./badge/badge.module').then((m) => m.BadgeModule),
      },
      {
        path: 'breadcrumbs',
        loadChildren: () =>
          import('./breadcrumbs/breadcrumbs.module').then(
            (m) => m.BreadcrumbsModule,
          ),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'button-toggle',
        loadChildren: () =>
          import('./button-toggle/button-toggle.module').then(
            (m) => m.ButtonToggleModule,
          ),
      },
      {
        path: 'card',
        loadChildren: () =>
          import('./card/card.module').then((m) => m.CardModule),
      },
      {
        path: 'checkbox',
        loadChildren: () =>
          import('./checkbox/checkbox.module').then((m) => m.CheckboxModule),
      },
      {
        path: 'chips',
        loadChildren: () =>
          import('./chips/chips.module').then((m) => m.ChipsModule),
      },
      {
        path: 'data-grid',
        loadChildren: () =>
          import('./data-grid/data-grid.module').then((m) => m.DataGridModule),
      },
      {
        path: 'date-picker',
        loadChildren: () =>
          import('./date-picker/date-picker.module').then(
            (m) => m.DatePickerModule,
          ),
      },
      {
        path: 'dialog',
        loadChildren: () =>
          import('./dialog/dialog.module').then((m) => m.DialogModule),
      },
      {
        path: 'divider',
        loadChildren: () =>
          import('./divider/divider.module').then((m) => m.DividerModule),
      },
      {
        path: 'expansion-panel',
        loadChildren: () =>
          import('./expansion-panel/expansion-panel.module').then(
            (m) => m.ExpansionPanelModule,
          ),
      },
      {
        path: 'footer',
        loadChildren: () =>
          import('./footer/footer.module').then((m) => m.FooterModule),
      },
      {
        path: 'form-field',
        loadChildren: () =>
          import('./form-field/form-field.module').then(
            (m) => m.FormFieldModule,
          ),
      },
      {
        path: 'header',
        loadChildren: () =>
          import('./header/header.module').then((m) => m.HeaderModule),
      },
      {
        path: 'highcharts',
        loadChildren: () =>
          import('./highcharts/highcharts.module').then(
            (m) => m.HighchartsModule,
          ),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule,
          ),
      },
      {
        path: 'paginator',
        loadChildren: () =>
          import('./paginator/paginator.module').then((m) => m.PaginatorModule),
      },
      {
        path: 'progress-bar',
        loadChildren: () =>
          import('./progress-bar/progress-bar.module').then(
            (m) => m.ProgressBarModule,
          ),
      },
      {
        path: 'progress-spinner',
        loadChildren: () =>
          import('./progress-spinner/progress-spinner.module').then(
            (m) => m.ProgressSpinnerModule,
          ),
      },
      {
        path: 'radio-button',
        loadChildren: () =>
          import('./radio-button/radio-button.module').then(
            (m) => m.RadioButtonModule,
          ),
      },
      {
        path: 'select',
        loadChildren: () =>
          import('./select/select.module').then((m) => m.SelectModule),
      },
      {
        path: 'sidenav',
        loadChildren: () =>
          import('./sidenav/sidenav.module').then((m) => m.SidenavModule),
      },
      {
        path: 'slide-toggle',
        loadChildren: () =>
          import('./slide-toggle/slide-toggle.module').then(
            (m) => m.SlideToggleModule,
          ),
      },
      {
        path: 'slider',
        loadChildren: () =>
          import('./slider/slider.module').then((m) => m.SliderModule),
      },
      {
        path: 'snackbar',
        loadChildren: () =>
          import('./snackbar/snackbar.module').then((m) => m.SnackbarModule),
      },
      {
        path: 'sort-header',
        loadChildren: () =>
          import('./sort-header/sort-header.module').then(
            (m) => m.SortHeaderModule,
          ),
      },
      {
        path: 'stepper',
        loadChildren: () =>
          import('./stepper/stepper.module').then((m) => m.StepperModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'tabs',
        loadChildren: () =>
          import('./tabs/tabs.module').then((m) => m.TabsModule),
      },
      {
        path: 'text-area',
        loadChildren: () =>
          import('./text-area/text-area.module').then((m) => m.TextAreaModule),
      },
      {
        path: 'text-input',
        loadChildren: () =>
          import('./text-input/text-input.module').then(
            (m) => m.TextInputModule,
          ),
      },
      {
        path: 'toolbar',
        loadChildren: () =>
          import('./toolbar/toolbar.module').then((m) => m.ToolbarModule),
      },
      {
        path: 'tooltips',
        loadChildren: () =>
          import('./tooltips/tooltips.module').then((m) => m.TooltipsModule),
      },
      {
        path: 'tree',
        loadChildren: () =>
          import('./tree/tree.module').then((m) => m.TreeModule),
      },
      { path: '', redirectTo: 'components-overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LeftNavigationComponent,
  ],
})
export class ComponentsModule {}
