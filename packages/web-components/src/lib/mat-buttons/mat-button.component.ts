import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cdx-next-mat-button',
  template: `<button
    mat-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
  >
    <ng-content></ng-content>
  </button>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disableRipple = false;
  @Input() disabled = false;
}
