import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { stringToNumberArrayConvertor } from '../utils/stringParsers';

@Component({
  template: ` <mat-paginator
    [color]="color"
    [disabled]="coerceBooleanProperty(disabled)"
    [hidePageSize]="coerceBooleanProperty(hidePageSize)"
    [length]="coerceNumberProperty(length)"
    [pageIndex]="coerceNumberProperty(pageIndex)"
    [pageSize]="coerceNumberProperty(pageSize)"
    [pageSizeOptions]="stringToNumberArrayConvertor(pageSizeOptions)"
    [showFirstLastButtons]="coerceBooleanProperty(showFirstLastButtons)"
  >
  </mat-paginator>`,
})
export class MatPaginatorWrapperComponent {
  @Input()
  color: ThemePalette;
  @Input()
  disabled = 'false';
  @Input()
  hidePageSize = 'false';
  @Input()
  length = '0';
  @Input()
  pageIndex = '0';
  @Input()
  pageSize = '10';
  @Input()
  pageSizeOptions = '[]';
  @Input()
  showFirstLastButtons = 'false';
  coerceBooleanProperty = coerceBooleanProperty;
  coerceNumberProperty = coerceNumberProperty;
  stringToNumberArrayConvertor = stringToNumberArrayConvertor;
}
