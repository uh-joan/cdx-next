import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';

import { stringToBooleanConvertor } from '../utils/stringParsers';

@Component({
  template: `
    <span
      [matBadge]="content"
      [matBadgeSize]="size"
      [matBadgeColor]="color"
      [matBadgeDescription]="description"
      [matBadgeDisabled]="stringToBooleanConvertor(disabled)"
      [matBadgeHidden]="stringToBooleanConvertor(hidden)"
      [matBadgeOverlap]="stringToBooleanConvertor(overlap)"
      [matBadgePosition]="position"
      ><ng-content></ng-content
    ></span>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBadgeSpanComponent {
  @Input() color?: ThemePalette;
  @Input() content: string | number | undefined | null;
  @Input() description = '';
  @Input() disabled = 'false';
  @Input() hidden = 'false';
  @Input() overlap = 'true';
  @Input() position: MatBadgePosition = 'above after';
  @Input() size: MatBadgeSize = 'medium';

  stringToBooleanConvertor = stringToBooleanConvertor;
}

//TODO Missing MatBadgeButtonComponent

@Component({
  template: `
    <mat-icon
      [matBadge]="content"
      [matBadgeSize]="size"
      [matBadgeColor]="color"
      [matBadgeDescription]="description"
      [matBadgeDisabled]="stringToBooleanConvertor(disabled)"
      [matBadgeHidden]="stringToBooleanConvertor(hidden)"
      [matBadgeOverlap]="stringToBooleanConvertor(overlap)"
      [matBadgePosition]="position"
      ><ng-content></ng-content
    ></mat-icon>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBadgeIconComponent {
  @Input() color?: ThemePalette;
  @Input() content: string | number | undefined | null;
  @Input() description = '';
  @Input() disabled = 'false';
  @Input() hidden = 'false';
  @Input() overlap = 'true';
  @Input() position: MatBadgePosition = 'above after';
  @Input() size: MatBadgeSize = 'medium';
  stringToBooleanConvertor = stringToBooleanConvertor;
}
