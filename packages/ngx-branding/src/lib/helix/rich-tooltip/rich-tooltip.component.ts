import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hlx-rich-tooltip',
  templateUrl: './rich-tooltip.component.html',
  styleUrl: './rich-tooltip.component.scss',
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class RichTooltipComponent {
  @Input() content!: any;
}
