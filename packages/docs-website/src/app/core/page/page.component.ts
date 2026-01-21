import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HelixFooterComponent } from '@cdx/ngx-branding';

import { MaterialDocComponent } from '../material-doc/material-doc.component';

@Component({
  selector: 'hlx-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [
    MatDividerModule,
    HelixFooterComponent,
    MaterialDocComponent,
    UpperCasePipe,
  ],
  providers: [UpperCasePipe],
})
export class PageComponent {
  title = input<string>();
  subtitle = input<string>();
  section = input<string>();
  componentName = input<string>();
}
