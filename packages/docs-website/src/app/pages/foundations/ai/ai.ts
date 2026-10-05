import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-ai',
  templateUrl: './ai.html',
  styleUrl: '../foundation-page.scss',
  imports: [Page, MatDivider, InternalLink],
})
export class Ai {
  @HostBinding('class') hostClass = 'cdx-section';
}
