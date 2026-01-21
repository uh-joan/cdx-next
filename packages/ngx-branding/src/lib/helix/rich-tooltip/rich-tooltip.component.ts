import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'hlx-rich-tooltip',
  templateUrl: './rich-tooltip.component.html',
  styleUrl: './rich-tooltip.component.scss',
  imports: [NgTemplateOutlet],
})
export class RichTooltipComponent {
  readonly content = input.required<TemplateRef<unknown>>();
}
