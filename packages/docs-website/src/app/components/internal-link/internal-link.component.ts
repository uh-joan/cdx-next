import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cdx-internal-link',
  templateUrl: './internal-link.component.html',
  styleUrls: ['./internal-link.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class InternalLinkComponent {
  @Input() url = '';
  @Input() inline = true;
  @Input() text = '';
}
