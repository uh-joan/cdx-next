import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HelixFooterComponent } from '@cdx/ngx-branding';

import { MaterialDoc } from '../material-doc/material-doc';

@Component({
  selector: 'hlx-page',
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  imports: [MatDividerModule, HelixFooterComponent, MaterialDoc, UpperCasePipe],
  providers: [UpperCasePipe],
})
export class Page {
  title = input<string>();
  subtitle = input<string>();
  section = input<string>();
  componentName = input<string>();
}
