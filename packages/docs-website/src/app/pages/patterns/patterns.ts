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
      elements: [
        {
          label: 'Patterns Overview',
          url: 'patterns-overview',
        },
      ],
    },
  ];
}
