import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  template: `
    <mat-progress-spinner
      [mode]="mode"
      [color]="color"
      [strokeWidth]="stringToNumberConvertor(strokeWidth)"
      [diameter]="stringToNumberConvertor(diameter)"
      [value]="stringToNumberConvertor(value)"
    ></mat-progress-spinner>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatProgressSpinnerElementComponent {
  @Input() color?: ThemePalette;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() diameter = '100';
  @Input() strokeWidth = '10';
  @Input() value = '';

  stringToNumberConvertor(str: string): number {
    const parsed = Number(str);
    if (isNaN(parsed)) {
      return 0;
    } else return parsed;
  }
}
