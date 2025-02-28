import { Component } from '@angular/core';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-foundations',
  standalone: false,
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.scss',
})
export class FoundationsComponent {
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
