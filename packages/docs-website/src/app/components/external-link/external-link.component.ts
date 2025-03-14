import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdx-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss'],
  imports: [CommonModule],
})
export class ExternalLinkComponent {
  @Input() url = '';
  @Input() inline = true;
  @Input() text = '';
}
