import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigation } from '../../core/left-navigation/left-navigation';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-services',
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
  imports: [RouterOutlet, LeftNavigation],
})
export class Services {
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
          label: 'OTI snippet',
          url: 'oti-snippet',
        },
        {
          label: 'Translations',
          url: 'translations',
        },
      ],
    },
  ];
}
