import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarSection } from './left-navigation.interface';

@Component({
  selector: 'web-left-navigation',
  templateUrl: './left-navigation.html',
  styleUrls: ['./left-navigation.scss'],
  imports: [RouterLink],
})
export class LeftNavigation {
  readonly config = input<NavbarSection[] | undefined>();
}
