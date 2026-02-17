import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigation } from '../../core/left-navigation/left-navigation';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-development',
  templateUrl: './development.html',
  styleUrls: ['./development.scss'],
  imports: [RouterOutlet, LeftNavigation],
})
export class Development {
  leftNavbarConfig: NavbarSection[] = [
    {
      elements: [
        {
          label: 'Getting Started Overview',
          url: 'getting-started-overview',
        },
        {
          label: 'Quick Start New Project',
          url: 'quick-start-new-project',
        },
        {
          label: 'Colors',
          url: 'colors',
        },
        {
          label: 'Typography',
          url: 'typography',
        },
        {
          label: 'Elevation',
          url: 'elevation',
        },
        {
          label: 'Density',
          url: 'density',
        },
        {
          label: 'Responsive Development',
          url: 'responsive-development',
        },
        {
          label: 'Migration Guide',
          url: 'migration-guide',
        },
        {
          label: 'Release Notes',
          url: 'release-notes',
        },
      ],
    },
  ];
}
