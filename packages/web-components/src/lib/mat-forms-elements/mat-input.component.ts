import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subscription } from 'rxjs';

import {
  InputFieldType,
  StringBoolean,
} from '../utils/web-components.interface';
import { MatInputErrorService } from './mat-input-error.service';

@Component({
  selector: 'cdx-mat-form-field-input',
  template: `
    <mat-form-field [appearance]="formFieldAppearance">
      <mat-label select="c-mat-label"><ng-content></ng-content></mat-label>
      <span matPrefix><ng-content select="c-mat-prefix"></ng-content></span>
      <ng-container *ngIf="fieldType === 'input'; else textArea">
        <input
          [formControl]="form"
          [errorStateMatcher]="errorStateMatcher"
          matInput
          [type]="inputType"
          [attr.maxlength]="maxlength"
          [readonly]="readOnly === 'true'"
          [placeholder]="placeholder"
        />
      </ng-container>
      <ng-template #textArea>
        <textarea
          [formControl]="form"
          [errorStateMatcher]="errorStateMatcher"
          matInput
          [type]="inputType"
          [attr.maxlength]="maxlength"
          [readonly]="readOnly === 'true'"
          [placeholder]="placeholder"
        ></textarea>
      </ng-template>
      <span matSuffix><ng-content select="c-mat-suffix"></ng-content></span>
      <mat-hint align="start">
        <ng-content select="c-mat-hint-left"></ng-content>
      </mat-hint>
      <mat-hint align="end">
        <ng-content select="c-mat-hint-right"></ng-content>
      </mat-hint>
      <mat-error>
        <ng-content select="c-mat-error"></ng-content>
      </mat-error>
    </mat-form-field>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldInputComponent implements OnChanges, OnInit, OnDestroy {
  @Input() formFieldAppearance: MatFormFieldAppearance = 'standard';
  @Input() value = '';
  @Input() inputType = 'text';
  @Input() readOnly: StringBoolean = 'false';
  @Input() disabled: StringBoolean = 'false';
  @Input() placeholder = '';
  @Input() maxlength = '';
  @Input() fieldType: InputFieldType = 'input';
  @Input() isError: StringBoolean = 'false';
  @Input() validateOnTouch: StringBoolean = 'true';
  @Input() validateOnDirty: StringBoolean = 'true';
  @Input() isSubmitted: StringBoolean = 'false';

  @Output() outputValue = new EventEmitter<string>();

  constructor(private matInputErrorService: MatInputErrorService) {}

  form: FormControl = new FormControl();
  errorStateMatcher = new FormErrorStateMatcher(this.matInputErrorService);
  formValueChangesSubscription?: Subscription;

  ngOnInit() {
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(
      (value: string) => {
        this.outputValue.emit(value);
      },
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.matInputErrorService.setErrorStatuses(
      this.isError === 'true',
      this.validateOnTouch === 'true',
      this.validateOnDirty == 'true',
      this.isSubmitted === 'true',
    );
    this.disabled === 'true' && this.form.disable();
    if (changes['value'].currentValue !== changes['value'].previousValue) {
      this.form.setValue(this.value);
    }
  }

  ngOnDestroy() {
    this.formValueChangesSubscription?.unsubscribe();
  }
}

export class FormErrorStateMatcher implements ErrorStateMatcher {
  constructor(private matInputErrorService: MatInputErrorService) {}
  isErrorState(control: FormControl | null): boolean {
    return !!(
      control &&
      this.matInputErrorService.isErrorStatus &&
      ((control.dirty && this.matInputErrorService.validateOnDirty) ||
        (control.touched && this.matInputErrorService.validateOnTouch) ||
        this.matInputErrorService.isSubmitted)
    );
  }
}
