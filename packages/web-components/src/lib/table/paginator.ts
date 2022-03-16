import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';

import {
  stringToBooleanConvertor,
  stringToIntConvertor,
  stringToNumberArrayConvertor,
} from '../utils/stringParsers';

@Component({
  template: ` <mat-paginator
    [color]="color"
    [disabled]="stringToBooleanConvertor(disabled)"
    [hidePageSize]="stringToBooleanConvertor(hidePageSize)"
    [length]="stringToIntConvertor(length)"
    [pageIndex]="stringToIntConvertor(pageIndex)"
    [pageSize]="stringToIntConvertor(pageSize)"
    [pageSizeOptions]="stringToNumberArrayConvertor(pageSizeOptions)"
    [showFirstLastButtons]="stringToBooleanConvertor(showFirstLastButtons)"
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
  stringToBooleanConvertor = stringToBooleanConvertor;
  stringToIntConvertor = stringToIntConvertor;
  stringToNumberArrayConvertor = stringToNumberArrayConvertor;
}
