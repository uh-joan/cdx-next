import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cdx-next-mat-flat-button-link',
  template: `<a
    mat-flat-button
    [color]="color"
    [disabled]="disabled"
    [href]="href"
    [target]="target"
    ><ng-content></ng-content
  ></a>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFlatButtonLinkComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disableRipple = false;
  @Input() disabled = false;
  @Input() href = '';
  @Input() target = '_blank';
}
