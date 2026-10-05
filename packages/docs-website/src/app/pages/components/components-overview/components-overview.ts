import { Component } from '@angular/core';

import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

interface ComponentEntry {
  title: string;
  route: string;
  text: string;
  /** Helix Figma library node, when the component has one. */
  figmaUrl?: string;
}

/** Helix component library in Figma (links from the Helix Component overview). */
const FIGMA_FILE = 'https://www.figma.com/file/pI4MbkwcVXdqrqFRi7YhLt?node-id=';

@Component({
  selector: 'cdx-components-overview',
  templateUrl: './components-overview.html',
  styleUrl: './components-overview.scss',
  host: { class: 'cdx-section' },
  imports: [Page, InternalLink],
})
export class ComponentsOverview {
  protected readonly components: ComponentEntry[] = [
    {
      title: 'Autocomplete',
      route: '/components/autocomplete',
      text: 'Suggests relevant options as the user types.',
    },
    {
      title: 'Badge',
      route: '/components/badge',
      text: 'A small value indicator that can be overlaid on another object.',
      figmaUrl: FIGMA_FILE + '13:1974',
    },
    {
      title: 'Breadcrumbs',
      route: '/components/breadcrumbs',
      text: "A navigational aid that displays the user's location in a hierarchy.",
      figmaUrl: FIGMA_FILE + '797:24271',
    },
    {
      title: 'Button',
      route: '/components/buttons',
      text: 'An interactive button with a range of presentation options.',
      figmaUrl: FIGMA_FILE + '3641:50925',
    },
    {
      title: 'Button - FAB',
      route: '/components/fab',
      text: 'The most common or important action on a screen, persisting when scrolling.',
      figmaUrl: FIGMA_FILE + '36:5657',
    },
    {
      title: 'Button - Icon button',
      route: '/components/icon-button',
      text: 'Performs a small action with a single tap.',
      figmaUrl: FIGMA_FILE + '31:5059',
    },
    {
      title: 'Button toggle',
      route: '/components/button-toggle',
      text: 'A groupable on/off toggle for enabling and disabling options.',
      figmaUrl: FIGMA_FILE + '3921:13728',
    },
    {
      title: 'Card',
      route: '/components/card',
      text: 'A styled container for pieces of itemized content.',
      figmaUrl: FIGMA_FILE + '13907:6',
    },
    {
      title: 'Checkbox',
      route: '/components/checkbox',
      text: 'Captures boolean input with an optional indeterminate mode.',
      figmaUrl: FIGMA_FILE + '99:9144',
    },
    {
      title: 'Chip',
      route: '/components/chips',
      text: 'Presents a list of items as a set of small, tactile entities.',
      figmaUrl: FIGMA_FILE + '139:8778',
    },
    {
      title: 'Data grid',
      route: '/components/data-grid',
      text: 'A data table that displays a set of data in a grid.',
    },
    {
      title: 'Date picker',
      route: '/components/date-picker',
      text: 'Captures dates, agnostic about their internal representation.',
      figmaUrl: FIGMA_FILE + '306:15059',
    },
    {
      title: 'Dialog',
      route: '/components/dialog',
      text: 'A configurable modal that displays dynamic content.',
      figmaUrl: FIGMA_FILE + '104:8638',
    },
    {
      title: 'Divider',
      route: '/components/divider',
      text: 'A vertical or horizontal visual divider.',
      figmaUrl: FIGMA_FILE + '116:8735',
    },
    {
      title: 'Expansion panel (accordion)',
      route: '/components/expansion-panel',
      text: 'A container which can be expanded to reveal more content.',
      figmaUrl: FIGMA_FILE + '132:11183',
    },
    {
      title: 'Footer',
      route: '/components/footer',
      text: 'A footer that sticks to the bottom of the page.',
      figmaUrl: FIGMA_FILE + '3728:22088',
    },
    {
      title: 'Form field',
      route: '/components/form-field',
      text: 'Wraps input fields so they are displayed consistently.',
    },
    {
      title: 'Header',
      route: '/components/header',
      text: 'A header that sticks to the top of the page.',
      figmaUrl: FIGMA_FILE + '4072:7091',
    },
    {
      title: 'Highcharts',
      route: '/components/highcharts',
      text: 'A theme for Highcharts library.',
    },
    {
      title: 'Hyperlink',
      route: '/components/hyperlink',
      text: 'Text that navigates users to another location.',
      figmaUrl: FIGMA_FILE + '3813:26274',
    },
    {
      title: 'Icon',
      route: '/components/icons',
      text: 'Renders a specified icon.',
      figmaUrl: FIGMA_FILE + '13:11245',
    },
    {
      title: 'Input (text field)',
      route: '/components/text-input',
      text: 'A single-line text input field.',
      figmaUrl: FIGMA_FILE + '3682:20670',
    },
    {
      title: 'List',
      route: '/components/list',
      text: 'A container for a list of items.',
      figmaUrl: FIGMA_FILE + '71:7314',
    },
    {
      title: 'Menu',
      route: '/components/menu',
      text: 'A floating panel of nestable options.',
      figmaUrl: FIGMA_FILE + '132:13646',
    },
    {
      title: 'Notifications',
      route: '/components/notifications',
      text: 'A message displayed to the user.',
    },
    {
      title: 'Paginator',
      route: '/components/paginator',
      text: 'Controls for displaying paged data.',
      figmaUrl: FIGMA_FILE + '184:9523',
    },
    {
      title: 'Progress bar',
      route: '/components/progress-bar',
      text: 'A linear progress indicator.',
      figmaUrl: FIGMA_FILE + '190:9578',
    },
    {
      title: 'Progress spinner',
      route: '/components/progress-spinner',
      text: 'A circular progress indicator.',
      figmaUrl: FIGMA_FILE + '220:10479',
    },
    {
      title: 'Radio button',
      route: '/components/radio-button',
      text: 'Allows the user to select one option from a group.',
      figmaUrl: FIGMA_FILE + '104:8435',
    },
    {
      title: 'Select',
      route: '/components/select',
      text: 'Allows the user to select one or more options using a dropdown.',
      figmaUrl: FIGMA_FILE + '3873:3705',
    },
    {
      title: 'Sidenav (Navigation drawer)',
      route: '/components/sidenav',
      text: 'A container for content that is fixed to one side of the screen.',
    },
    {
      title: 'Skeleton loader',
      route: '/components/skeleton-loader',
      text: 'Shows a placeholder of content while data is loading.',
    },
    {
      title: 'Slide toggle (switch)',
      route: '/components/slide-toggle',
      text: 'Captures boolean values as a clickable and draggable switch.',
      figmaUrl: FIGMA_FILE + '3668:12495',
    },
    {
      title: 'Slider',
      route: '/components/slider',
      text: 'Allows the user to input a value by dragging along a slider.',
      figmaUrl: FIGMA_FILE + '8587:660',
    },
    {
      title: 'Snackbar',
      route: '/components/snackbar',
      text: 'Displays short actionable messages as an uninvasive alert.',
      figmaUrl: FIGMA_FILE + '256:9622',
    },
    {
      title: 'Sort header',
      route: '/components/sort-header',
      text: 'Allows the user to configure how tabular data is sorted.',
    },
    {
      title: 'Stepper',
      route: '/components/stepper',
      text: 'Presents content as steps through which to progress.',
    },
    {
      title: 'Table and data grid',
      route: '/components/table',
      text: 'A configurable component for displaying tabular data.',
      figmaUrl: FIGMA_FILE + '428:30324',
    },
    {
      title: 'Tabs',
      route: '/components/tabs',
      text: 'Only presents one view at a time from a provided set of views.',
      figmaUrl: FIGMA_FILE + '3953:13310',
    },
    {
      title: 'Text area',
      route: '/components/text-area',
      text: 'A multi-line text input field.',
    },
    {
      title: 'Time picker',
      route: '/components/time-picker',
      text: 'Sets the time portion of a date by typing or picking from a list.',
    },
    {
      title: 'Toolbar',
      route: '/components/toolbar',
      text: 'A container for top-level titles and controls.',
    },
    {
      title: 'Tooltip',
      route: '/components/tooltips',
      text: 'Displays floating content when an object is hovered.',
      figmaUrl: FIGMA_FILE + '288:14173',
    },
    {
      title: 'Tree',
      route: '/components/tree',
      text: 'Presents hierarchical content as an expandable tree.',
      figmaUrl: FIGMA_FILE + '293:14982',
    },
  ];
}
