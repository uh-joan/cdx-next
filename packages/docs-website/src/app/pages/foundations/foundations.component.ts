import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-foundations',
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.scss',
  imports: [RouterModule, LeftNavigationComponent],
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
