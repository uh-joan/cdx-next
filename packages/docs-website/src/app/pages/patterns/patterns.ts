import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigation } from '../../core/left-navigation/left-navigation';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-patterns',
  templateUrl: './patterns.html',
  styleUrl: './patterns.scss',
  imports: [RouterOutlet, LeftNavigation],
})
export class Patterns {
  leftNavbarConfig: NavbarSection[] = [
    {
      heading: 'Filters',
      elements: [
        { label: 'Overview', url: 'filters' },
        { label: 'Basic filters', url: 'filters/basic-filters' },
        { label: 'Filter modal', url: 'filters/filter-modal' },
        { label: 'Filter panel', url: 'filters/filter-panel' },
      ],
    },
    {
      heading: 'Sidebar',
      elements: [
        { label: 'Overview', url: 'sidebar' },
        {
          label: 'Header with navigation and sidebar',
          url: 'sidebar/header-with-navigation',
        },
        { label: 'Nested navigation', url: 'sidebar/nested-navigation' },
        {
          label: 'Products working best with sidebar',
          url: 'sidebar/products',
        },
      ],
    },
    {
      heading: 'Page states',
      elements: [{ label: 'Overview', url: 'page-states' }],
    },
    {
      heading: 'Dialogs',
      elements: [{ label: 'Overview', url: 'dialogs' }],
    },
    {
      heading: 'App shell',
      elements: [{ label: 'Overview', url: 'app-shell' }],
    },
  ];
}
