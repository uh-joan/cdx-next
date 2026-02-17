import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cdx-internal-link',
  templateUrl: './internal-link.html',
  styleUrls: ['./internal-link.scss'],
  imports: [RouterLink],
})
export class InternalLink {
  url = input.required<string>();
  inline = input<boolean>(false);
  text = input.required<string>();
}
