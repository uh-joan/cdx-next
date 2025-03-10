import { Component } from '@angular/core';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-development',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
})
export class DevelopmentComponent {
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
