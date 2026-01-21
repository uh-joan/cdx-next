import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-patterns',
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.scss',
  imports: [RouterOutlet, LeftNavigationComponent],
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
