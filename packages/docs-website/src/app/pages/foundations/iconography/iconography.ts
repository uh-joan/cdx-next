import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-iconography',
  templateUrl: './iconography.html',
  styleUrl: '../foundation-page.scss',
  imports: [Page, MatDivider, MatIcon],
})
export class Iconography {
  @HostBinding('class') hostClass = 'cdx-section';
}
