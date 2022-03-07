import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  template: `
    <mat-progress-bar
      [value]="stringToNumberConvertor(value)"
      [bufferValue]="stringToNumberConvertor(bufferValue)"
      [color]="color"
      [mode]="mode"
    ></mat-progress-bar>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatProgressBarComponent {
  @Input() bufferValue = '0';
  @Input() color?: ThemePalette;
  @Input() mode: ProgressBarMode = 'determinate';
  @Input() value = '0';

  stringToNumberConvertor(str: string): number {
    const parsed = Number(str);
    if (isNaN(parsed)) {
      return 0;
    } else return parsed;
  }
}
