import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cdx-next-mat-flat-button',
  template: `<button
    mat-flat-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
  >
    <ng-content></ng-content>
  </button>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFlatButtonComponent {
  @Input() color?: ThemePalette;
  @Input() disableRipple = false;
  @Input() disabled = false;
}
