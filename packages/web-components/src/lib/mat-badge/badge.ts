import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';

@Component({
  template: `
    <span
      [matBadge]="content"
      [matBadgeSize]="size"
      [matBadgeColor]="color"
      [matBadgeDescription]="description"
      [matBadgeDisabled]="disabled"
      [matBadgeHidden]="hidden"
      [matBadgeOverlap]="overlap"
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
  @Input() description?: string;
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() overlap?: boolean;
  @Input() position?: MatBadgePosition;
  @Input() size?: MatBadgeSize;
}

//TODO Missing MatBadgeButtonComponent

@Component({
  template: `
    <mat-icon
      [matBadge]="content"
      [matBadgeSize]="size"
      [matBadgeColor]="color"
      [matBadgeDescription]="description"
      [matBadgeDisabled]="disabled"
      [matBadgeHidden]="hidden"
      [matBadgeOverlap]="overlap"
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
  @Input() description?: string;
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() overlap?: boolean;
  @Input() position?: MatBadgePosition;
  @Input() size?: MatBadgeSize;
}
