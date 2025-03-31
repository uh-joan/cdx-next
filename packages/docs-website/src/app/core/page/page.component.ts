import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HelixFooterComponent } from '@cdx/ngx-branding';

import { MaterialDocComponent } from '../material-doc/material-doc.component';

@Component({
  selector: 'hlx-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [
    MatDividerModule,
    CommonModule,
    HelixFooterComponent,
    MaterialDocComponent,
  ],
  providers: [UpperCasePipe],
})
export class PageComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() section?: string;
  @Input() componentName?: string;
}
