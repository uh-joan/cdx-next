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
    {
      heading: 'List with filters',
      elements: [{ label: 'Overview', url: 'list-with-filters' }],
    },
    {
      heading: 'AI assistant',
      elements: [{ label: 'Overview', url: 'ai-assistant' }],
    },
    {
      heading: 'AI prompt starters',
      elements: [{ label: 'Overview', url: 'ai-prompt-starters' }],
    },
    {
      heading: 'AI generation trace',
      elements: [{ label: 'Overview', url: 'ai-generation-trace' }],
    },
    {
      heading: 'AI usage & limits',
      elements: [{ label: 'Overview', url: 'ai-usage-limits' }],
    },
    {
      heading: 'Inline AI actions',
      elements: [{ label: 'Overview', url: 'ai-inline-actions' }],
    },
    {
      heading: 'AI generate & rewrite',
      elements: [{ label: 'Overview', url: 'ai-generate-field' }],
    },
    {
      heading: 'AI entry points',
      elements: [{ label: 'Overview', url: 'ai-entry-points' }],
    },
    {
      heading: 'Data grid',
      elements: [{ label: 'Overview', url: 'data-grid' }],
    },
    {
      heading: 'Charts',
      elements: [{ label: 'Overview', url: 'charts' }],
    },
    {
      heading: 'Form layout',
      elements: [{ label: 'Overview', url: 'forms' }],
    },
    {
      heading: 'Entity detail',
      elements: [{ label: 'Overview', url: 'entity-detail' }],
    },
    {
      heading: 'Export',
      elements: [{ label: 'Overview', url: 'export' }],
    },
    {
      heading: 'Error pages',
      elements: [{ label: 'Overview', url: 'error-pages' }],
    },
  ];
}
