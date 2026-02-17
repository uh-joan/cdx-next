import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-about-helix',
  templateUrl: './about-helix.html',
  styleUrl: './about-helix.scss',
  imports: [Page, MatDivider],
})
export class AboutHelix {
  @HostBinding('class') hostClass = 'cdx-section';
}
