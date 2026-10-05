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
          label: 'Components Overview',
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
          label: 'Buttons',
          url: 'buttons',
        },
        {
          label: 'Button Toggle',
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
          label: 'Chips',
          url: 'chips',
        },
        {
          label: 'Data Grid',
          url: 'data-grid',
        },
        {
          label: 'Date Picker',
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
          label: 'Expansion Panel',
          url: 'expansion-panel',
        },
        {
          label: 'Footer',
          url: 'footer',
        },
        {
          label: 'Form Field',
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
          label: 'Icons',
          url: 'icons',
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
          label: 'Progress Bar',
          url: 'progress-bar',
        },
        {
          label: 'Progress Spinner',
          url: 'progress-spinner',
        },

        {
          label: 'Radio Button',
          url: 'radio-button',
        },
        {
          label: 'Select',
          url: 'select',
        },
        {
          label: 'Sidenav',
          url: 'sidenav',
        },
        {
          label: 'Skeleton Loader',
          url: 'skeleton-loader',
        },
        {
          label: 'Slide Toggle',
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
          label: 'Sort Header',
          url: 'sort-header',
        },
        {
          label: 'Stepper',
          url: 'stepper',
        },
        {
          label: 'Table',
          url: 'table',
        },
        {
          label: 'Tabs',
          url: 'tabs',
        },
        {
          label: 'Text Area',
          url: 'text-area',
        },
        {
          label: 'Text Input',
          url: 'text-input',
        },
        {
          label: 'Time Picker',
          url: 'time-picker',
        },
        {
          label: 'Toolbar',
          url: 'toolbar',
        },
        {
          label: 'Tooltips',
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
