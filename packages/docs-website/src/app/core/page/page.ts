import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { HelixFooterComponent } from '@cdx/ngx-branding';

@Component({
  selector: 'hlx-page',
  templateUrl: './page.html',
  styleUrl: './page.scss',
  imports: [HelixFooterComponent, UpperCasePipe],
})
export class Page {
  title = input<string>();
  subtitle = input<string>();
  section = input<string>();
  componentName = input<string>();
}
