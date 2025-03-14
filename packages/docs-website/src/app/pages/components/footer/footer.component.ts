import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [PagesCommonModule],
})
export class FooterComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixFooterModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
