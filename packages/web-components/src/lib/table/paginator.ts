import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';

import {
  stringToBooleanConvertor,
  stringToIntConvertor,
} from '../utils/stringParsers';

@Component({
  template: ` <mat-paginator
    [color]="color"
    [disabled]="stringToBooleanConvertor(disabled)"
    [hidePageSize]="stringToBooleanConvertor(hidePageSize)"
    [length]="stringToIntConvertor(length)"
    [pageIndex]="stringToIntConvertor(pageIndex)"
    [pageSize]="stringToIntConvertor(pageSize)"
    [pageSizeOptions]="pageSizeOptions"
    [showFirstLastButtons]="stringToBooleanConvertor(showFirstLastButtons)"
    (page)="(page)"
  >
  </mat-paginator>`,
})
export class MatPaginatorWrapperComponent {
  @Input()
  color: ThemePalette;
  @Input()
  disabled?: string;
  @Input()
  hidePageSize?: string;
  @Input()
  length?: string;
  @Input()
  pageIndex?: string;
  @Input()
  pageSize?: string;
  @Input()
  pageSizeOptions?: number[];
  @Input()
  showFirstLastButtons?: string;
  @Output()
  page?: EventEmitter<PageEvent>;
  stringToBooleanConvertor = stringToBooleanConvertor;
  stringToIntConvertor = stringToIntConvertor;
}
