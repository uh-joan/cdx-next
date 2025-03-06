import { Component, HostBinding } from '@angular/core';

import * as samples from './examples';

@Component({
  selector: 'app-footer',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixFooterModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
