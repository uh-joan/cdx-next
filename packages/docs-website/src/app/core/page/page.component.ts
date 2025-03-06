import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HelixFooterComponent } from '@cdx/ngx-branding';

@Component({
  selector: 'hlx-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [MatDividerModule, CommonModule, HelixFooterComponent],
  providers: [UpperCasePipe],
})
export class PageComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() section?: string;
}
