import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cdx-internal-link',
  templateUrl: './internal-link.component.html',
  styleUrls: ['./internal-link.component.scss'],
  imports: [RouterLink],
})
export class InternalLinkComponent {
  url = input.required<string>();
  inline = input<boolean>(false);
  text = input.required<string>();
}
