import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarSection } from './left-navigation.interface';

@Component({
  selector: 'web-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  imports: [RouterLink],
})
export class LeftNavigationComponent {
  readonly config = input<NavbarSection[] | undefined>();
}
