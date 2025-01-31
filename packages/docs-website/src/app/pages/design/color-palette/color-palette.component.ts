import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
