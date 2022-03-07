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
    mat-fab
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    aria-label="ariaLabel"
  >
    <ng-content></ng-content>
  </button>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFabButtonComponent {
  @Input() color?: ThemePalette;
  @Input() disableRipple = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
}
