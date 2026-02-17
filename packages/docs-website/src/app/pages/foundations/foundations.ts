import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftNavigation } from '../../core/left-navigation/left-navigation';
import { NavbarSection } from '../../core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-foundations',
  templateUrl: './foundations.html',
  styleUrl: './foundations.scss',
  imports: [RouterOutlet, LeftNavigation],
})
export class Foundations {
  leftNavbarConfig: NavbarSection[] = [
    {
      elements: [
        {
          label: 'About Helix',
          url: 'about-helix',
        },
        /*{
          label: 'Quickstart guide',
          url: 'quickstart-guide',
        },
        {
          label: 'Services',
          url: 'services',
        },
        {
          label: 'Browser support',
          url: 'browser-support',
        },
        {
          label: 'Accessibility',
          url: 'accessibility',
        },*/
      ],
    },
  ];
}
