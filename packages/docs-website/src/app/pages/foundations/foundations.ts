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
          label: 'Principles & foundations',
          url: 'principles-and-foundations',
        },
        {
          label: 'Color',
          url: 'color',
        },
        {
          label: 'Typography',
          url: 'typography',
        },
        {
          label: 'Iconography',
          url: 'iconography',
        },
        {
          label: 'Branding',
          url: 'branding',
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
          label: 'AI',
          url: 'ai',
        },
      ],
    },
  ];
}
