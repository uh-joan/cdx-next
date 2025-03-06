import { Component } from '@angular/core';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-services',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  leftNavbarConfig: NavbarSection[] = [
    {
      elements: [
        {
          label: 'Services Overview',
          url: 'services-overview',
        },
        {
          label: 'Analytics',
          url: 'analytics',
        },
        {
          label: 'Authentication',
          url: 'authentication',
        },
        {
          label: 'Session Activity Management',
          url: 'session-activity-management',
        },
        {
          label: 'Translations',
          url: 'translations',
        },
      ],
    },
  ];
}
