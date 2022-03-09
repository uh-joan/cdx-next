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
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs/internal/Subscription';

import {
  LabelPosition,
  StringBoolean,
} from '../utils/web-components.interface';

@Component({
  template: `
    <mat-slide-toggle
      [formControl]="form"
      ariaDescribedby="ariaDescribedby"
      ariaLabel="ariaLabel"
      ariaLabelledby="ariaLabelledby"
      [color]="color"
      [disableRipple]="disableRipple === 'true'"
      [labelPosition]="labelPosition"
      [id]="id"
      [name]="name"
      [required]="required === 'true'"
      ><ng-content></ng-content
    ></mat-slide-toggle>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatSlideToggleElementComponent
  implements OnChanges, OnInit, OnDestroy
{
  @Input() ariaDescribedby = '';
  @Input() ariaLabel = '';
  @Input() ariaLabelledby = '';
  @Input() checked: StringBoolean = 'false';
  @Input() color?: ThemePalette;
  @Input() disableRipple: StringBoolean = 'false';
  @Input() disabled: StringBoolean = 'false';
  @Input() labelPosition: LabelPosition = 'after';
  @Input() id = '';
  @Input() name: string | null = null;
  @Input() required: StringBoolean = 'false';

  @Output() outputValue = new EventEmitter<boolean>();

  form: FormControl = new FormControl();
  formValueChangesSubscription?: Subscription;

  ngOnInit(): void {
    this.form.setValue(eval(this.checked));
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(
      (value: boolean) => {
        this.outputValue.emit(value);
      },
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['disabled']?.currentValue !== changes['disabled']?.previousValue
    ) {
      eval(this.disabled) ? this.form.disable() : this.form.enable();
    }
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }
}
