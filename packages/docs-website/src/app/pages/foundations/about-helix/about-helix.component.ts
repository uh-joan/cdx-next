import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-about-helix',
  templateUrl: './about-helix.component.html',
  styleUrl: './about-helix.component.scss',
  imports: [PageComponent, MatDivider],
})
export class AboutHelixComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
