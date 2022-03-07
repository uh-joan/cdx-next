import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cdx-next-mat-mini-fab-button-link',
  template: `<a
    mat-mini-fab
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    [href]="href"
    [target]="target"
    ><ng-content></ng-content
  ></a>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatMiniFabButtonLinkComponent {
  @Input() color?: ThemePalette;
  @Input() disableRipple = false;
  @Input() disabled = false;
  @Input() href = '';
  @Input() target = '_blank';
}
