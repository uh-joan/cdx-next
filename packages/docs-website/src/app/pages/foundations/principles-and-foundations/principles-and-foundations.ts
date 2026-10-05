import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-principles-and-foundations',
  templateUrl: './principles-and-foundations.html',
  styleUrl: '../foundation-page.scss',
  imports: [Page, MatDivider, InternalLink],
})
export class PrinciplesAndFoundations {
  @HostBinding('class') hostClass = 'cdx-section';
}
