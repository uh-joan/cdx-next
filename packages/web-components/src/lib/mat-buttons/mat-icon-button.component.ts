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
    mat-icon-button
    [color]="color"
    [disabled]="disabled"
    aria-label="ariaLabel"
  >
    <ng-content></ng-content>
  </button>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatIconButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disableRipple = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
}
