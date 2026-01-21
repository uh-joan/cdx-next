import { Component, input } from '@angular/core';

@Component({
  selector: 'cdx-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss'],
})
export class ExternalLinkComponent {
  url = input.required<string>();
  inline = input<boolean>(false);
  text = input<string>();
}
