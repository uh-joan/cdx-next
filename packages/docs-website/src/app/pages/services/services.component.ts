import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigationComponent } from '../../core/left-navigation/left-navigation.component';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [RouterOutlet, LeftNavigationComponent],
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
          label: 'Oti Snippet',
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
