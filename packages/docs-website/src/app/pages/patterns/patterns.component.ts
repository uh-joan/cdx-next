import { Component } from '@angular/core';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-patterns',
  standalone: false,
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.scss',
})
export class PatternsComponent {
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
