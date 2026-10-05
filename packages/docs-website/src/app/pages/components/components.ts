import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigation } from '../../core/left-navigation/left-navigation';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-components',
  templateUrl: './components.html',
  imports: [RouterOutlet, LeftNavigation],
})
export class Components {
  leftNavbarConfig: NavbarSection[] = [
    {
      elements: [
        {
          label: 'Component overview',
          url: 'components-overview',
        },
        {
          label: 'Autocomplete',
          url: 'autocomplete',
        },
        {
          label: 'Badge',
          url: 'badge',
        },
        {
          label: 'Breadcrumbs',
          url: 'breadcrumbs',
        },
        {
          label: 'Button',
          url: 'buttons',
        },
        {
          label: 'Button - FAB',
          url: 'fab',
        },
        {
          label: 'Button - Icon button',
          url: 'icon-button',
        },
        {
          label: 'Button toggle',
          url: 'button-toggle',
        },
        {
          label: 'Card',
          url: 'card',
        },
        {
          label: 'Checkbox',
          url: 'checkbox',
        },
        {
          label: 'Chip',
          url: 'chips',
        },
        {
          label: 'Data grid',
          url: 'data-grid',
        },
        {
          label: 'Date picker',
          url: 'date-picker',
        },
        {
          label: 'Dialog',
          url: 'dialog',
        },
        {
          label: 'Divider',
          url: 'divider',
        },
        {
          label: 'Expansion panel (accordion)',
          url: 'expansion-panel',
        },
        {
          label: 'Footer',
          url: 'footer',
        },
        {
          label: 'Form field',
          url: 'form-field',
        },
        {
          label: 'Header',
          url: 'header',
        },
        {
          label: 'Highcharts',
          url: 'highcharts',
        },
        {
          label: 'Hyperlink',
          url: 'hyperlink',
        },
        {
          label: 'Icon',
          url: 'icons',
        },
        {
          label: 'Input (text field)',
          url: 'text-input',
        },
        {
          label: 'List',
          url: 'list',
        },
        {
          label: 'Menu',
          url: 'menu',
        },
        {
          label: 'Notifications',
          url: 'notifications',
        },
        {
          label: 'Paginator',
          url: 'paginator',
        },
        {
          label: 'Progress bar',
          url: 'progress-bar',
        },
        {
          label: 'Progress spinner',
          url: 'progress-spinner',
        },
        {
          label: 'Radio button',
          url: 'radio-button',
        },
        {
          label: 'Select',
          url: 'select',
        },
        {
          label: 'Sidenav (Navigation drawer)',
          url: 'sidenav',
        },
        {
          label: 'Skeleton loader',
          url: 'skeleton-loader',
        },
        {
          label: 'Slide toggle (switch)',
          url: 'slide-toggle',
        },
        {
          label: 'Slider',
          url: 'slider',
        },
        {
          label: 'Snackbar',
          url: 'snackbar',
        },
        {
          label: 'Sort header',
          url: 'sort-header',
        },
        {
          label: 'Stepper',
          url: 'stepper',
        },
        {
          label: 'Table and data grid',
          url: 'table',
        },
        {
          label: 'Tabs',
          url: 'tabs',
        },
        {
          label: 'Text area',
          url: 'text-area',
        },
        {
          label: 'Time picker',
          url: 'time-picker',
        },
        {
          label: 'Toolbar',
          url: 'toolbar',
        },
        {
          label: 'Tooltip',
          url: 'tooltips',
        },
        {
          label: 'Tree',
          url: 'tree',
        },
      ],
    },
  ];
}
