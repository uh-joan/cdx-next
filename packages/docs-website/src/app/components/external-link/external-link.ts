import { Component, input } from '@angular/core';

@Component({
  selector: 'cdx-external-link',
  templateUrl: './external-link.html',
  styleUrls: ['./external-link.scss'],
})
export class ExternalLink {
  url = input.required<string>();
  inline = input<boolean>(false);
  text = input<string>();
}
