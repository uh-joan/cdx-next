import { Component, HostBinding } from '@angular/core';

interface ComponentExample {
  title: string;
  text: string;
  route: string;
  imageName: string;
}

@Component({
  selector: 'cdx-components-overview',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './components-overview.component.html',
  styleUrls: ['./components-overview.component.scss'],
})
export class ComponentsOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  basePath = '../assets/components/scenes/';
  extension = '.png';

  components: ComponentExample[] = [
    {
      title: 'Autocomplete',
      text: 'Suggests relevant options as the user types.',
      route: '/components/autocomplete',
      imageName: 'autocomplete.svg',
    },
    {
      title: 'Badge',
      text: 'A small value indicator that can be overlaid on another object.',
      route: '/components/badge',
      imageName: 'badge.svg',
    },
    {
      title: 'Breadcrumbs',
      text: "A navigational aid that displays the user's location in a hierarchy.",
      route: '/components/breadcrumbs',
      imageName: 'breadcrumbs.svg',
    },
    {
      title: 'Buttons',
      text: 'An interactive button with a range of presentation options.',
      route: '/components/buttons',
      imageName: 'button.svg',
    },
    {
      title: 'Button toggle',
      text: 'A groupable on/off toggle for enabling and disabling options.',
      route: '/components/button-toggle',
      imageName: 'button-toggle.svg',
    },
    {
      title: 'Card',
      text: 'A styled container for pieces of itemized content.',
      route: '/components/card',
      imageName: 'card.svg',
    },
    {
      title: 'Checkbox',
      text: 'Captures boolean input with an optional indeterminate mode.',
      route: '/components/checkbox',
      imageName: 'checkbox.svg',
    },
    {
      title: 'Chips',
      text: 'Presents a list of items as a set of small, tactile entities.',
      route: '/components/chips',
      imageName: 'chips.svg',
    },
    {
      title: 'Data grid',
      text: 'A data table that displays a set of data in a grid.',
      route: '/components/data-grid',
      imageName: 'data-grid.svg',
    },
    {
      title: 'Datepicker',
      text: 'Captures dates, agnostic about their internal representation.',
      route: '/components/date-picker',
      imageName: 'datepicker.svg',
    },
    {
      title: 'Dialog',
      text: 'A configurable modal that displays dynamic content.',
      route: '/components/dialog',
      imageName: 'dialog.svg',
    },
    {
      title: 'Divider',
      text: 'A vertical or horizontal visual divider.',
      route: '/components/divider',
      imageName: 'divider.svg',
    },
    {
      title: 'Footer',
      text: 'A footer that sticks to the bottom of the page.',
      route: '/components/footer',
      imageName: 'footer.svg',
    },
    {
      title: 'Form field',
      text: 'Wraps input fields so they are displayed consistently.',
      route: '/components/form-field',
      imageName: 'form-field.svg',
    },
    {
      title: 'Expansion Panel',
      text: 'A container which can be expanded to reveal more content.',
      route: '/components/expansion-panel',
      imageName: 'expansion-panel.svg',
    },
    {
      title: 'Header',
      text: 'A header that sticks to the top of the page.',
      route: '/components/header',
      imageName: 'header.svg',
    },
    {
      title: 'Highcharts',
      text: 'A theme for Highcharts library.',
      route: '/components/highcharts',
      imageName: 'highcharts.svg',
    },
    {
      title: 'Icons',
      text: 'Renders a specified icon.',
      route: '/components/icons',
      imageName: 'icons.svg',
    },
    {
      title: 'List',
      text: 'A container for a list of items.',
      route: '/components/list',
      imageName: 'list.svg',
    },
    {
      title: 'Menu',
      text: 'A floating panel of nestable options.',
      route: '/components/menu',
      imageName: 'menu.svg',
    },
    {
      title: 'Notifications',
      text: 'A message displayed to the user.',
      route: '/components/notifications',
      imageName: 'notifications.svg',
    },

    {
      title: 'Paginator',
      text: 'Controls for displaying paged data.',
      route: '/components/paginator',
      imageName: 'paginator.svg',
    },
    {
      title: 'Progress bar',
      text: 'A linear progress indicator.',
      route: '/components/progress-bar',
      imageName: 'progress-bar.svg',
    },
    {
      title: 'Progress spinner',
      text: 'A circular progress indicator.',
      route: '/components/progress-spinner',
      imageName: 'progress-spinner.svg',
    },
    {
      title: 'Radio button',
      text: 'Allows the user to select one option from a group.',
      route: '/components/radio-button',
      imageName: 'radio-button.svg',
    },
    {
      title: 'Select',
      text: 'Allows the user to select one or more options using a dropdown.',
      route: '/components/select',
      imageName: 'select.svg',
    },
    {
      title: 'Sidenav',
      text: 'A container for content that is fixed to one side of the screen.',
      route: '/components/sidenav',
      imageName: 'sidenav.svg',
    },
    {
      title: 'Slide toggle',
      text: 'Captures boolean values as a clickable and draggable switch.',
      route: '/components/slide-toggle',
      imageName: 'slide-toggle.svg',
    },
    {
      title: 'Slider',
      text: 'Allows the user to input a value by dragging along a slider.',
      route: '/components/slider',
      imageName: 'slider.svg',
    },
    {
      title: 'Snackbar',
      text: 'Displays short actionable messages as an uninvasive alert.',
      route: '/components/snackbar',
      imageName: 'snackbar.svg',
    },
    {
      title: 'Sort header',
      text: 'Allows the user to configure how tabular data is sorted.',
      route: '/components/sort-header',
      imageName: 'sort-header.svg',
    },
    {
      title: 'Stepper',
      text: 'Presents content as steps through which to progress.',
      route: '/components/stepper',
      imageName: 'stepper.svg',
    },
    {
      title: 'Table',
      text: 'A configurable component for displaying tabular data.',
      route: '/components/table',
      imageName: 'table.svg',
    },
    {
      title: 'Tabs',
      text: 'Only presents one view at a time from a provided set of views.',
      route: '/components/tabs',
      imageName: 'tabs.svg',
    },
    {
      title: 'Text Area',
      text: 'A multi-line text input field.',
      route: '/components/text-area',
      imageName: 'text-area.svg',
    },
    {
      title: 'Text Input',
      text: 'A single-line text input field.',
      route: '/components/text-input',
      imageName: 'text-input.svg',
    },
    {
      title: 'Toolbar',
      text: 'A container for top-level titles and controls.',
      route: '/components/toolbar',
      imageName: 'toolbar.svg',
    },
    {
      title: 'Tooltips',
      text: 'Displays floating content when an object is hovered.',
      route: '/components/tooltips',
      imageName: 'tooltips.svg',
    },
    {
      title: 'Tree',
      text: 'Presents hierarchical content as an expandable tree.',
      route: '/components/tree',
      imageName: 'tree.svg',
    },
  ];
}
