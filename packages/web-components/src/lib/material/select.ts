import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorStateMatcher, MatOption } from '@angular/material/core';

@Component({
  template: `
    <mat-form-field appearance="fill">
      <mat-label>{{ label }}</mat-label>
      <mat-select
        [aria-label]="ariaLabel"
        [aria-labelledby]="ariaLabelledby"
        [disableOptionCentering]="disableOptionCentering"
        [disableRipple]="disableRipple"
        [disabled]="disabled"
        [id]="id"
        [multiple]="multiple"
        [panelClass]="panelClass"
        [placeholder]="placeholder"
        [required]="required"
        [typeaheadDebounceInterval]="typeaheadDebounceInterval"
        [value]="value"
      >
        <mat-option
          *ngFor="let option of internalOptions"
          [value]="option.value"
        >
          {{ option.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class MatSelectWrapperComponent implements OnInit {
  internalOptions: any[] = [];

  @Input() options = '';
  @Input() label?: string;
  @Input('aria-label')
  ariaLabel = '';
  @Input('aria-labelledby')
  ariaLabelledby = '';
  @Input()
  compareWith?: (o1: any, o2: any) => boolean;
  @Input()
  disableOptionCentering?: boolean;
  @Input()
  disableRipple?: boolean;
  @Input()
  disabled?: boolean = false;
  @Input()
  errorStateMatcher?: ErrorStateMatcher;
  @Input()
  id = '';
  @Input()
  multiple?: boolean;
  @Input()
  panelClass: string | string[] | Set<string> | { [key: string]: any } = '';
  @Input()
  placeholder = '';
  @Input()
  required?: boolean;

  @Input()
  typeaheadDebounceInterval?: number;
  @Input()
  value?: any;

  ngOnInit() {
    this.internalOptions = JSON.parse(this.options);
  }
}
