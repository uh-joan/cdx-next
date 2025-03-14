import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarSection } from './left-navigation.interface';

@Component({
  selector: 'left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class LeftNavigationComponent {
  @Input() config?: NavbarSection[];
}
