import { Component, HostBinding } from '@angular/core';

import * as samples from './examples';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixHeaderModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
