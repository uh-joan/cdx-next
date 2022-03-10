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
import { MatRadioButtonService } from './mat-radio-button.service';

@Component({
  template: `
    <mat-radio-group
      [formControl]="form"
      [color]="color"
      [labelPosition]="labelPosition"
      [name]="name"
      [required]="required === 'true'"
      [value]="value"
      ><ng-content></ng-content>
    </mat-radio-group>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatRadioButtonWrapperComponent
  implements OnChanges, OnInit, OnDestroy
{
  @Input() color?: ThemePalette;
  @Input() disabled: StringBoolean = 'false';
  @Input() labelPosition: LabelPosition = 'after';
  @Input() name = '';
  @Input() required: StringBoolean = 'false';
  @Input() value = '';

  @Output() outputValue = new EventEmitter<string>();

  constructor(private matRadioButtonService: MatRadioButtonService) {}

  form: FormControl = new FormControl();
  formValueChangesSubscription?: Subscription;
  matRadioButtonSubscription?: Subscription;

  ngOnInit(): void {
    this.matRadioButtonService.radioButtonNewValueSubject.subscribe((value) => {
      this.form.setValue(value);
    });

    this.formValueChangesSubscription = this.form.valueChanges.subscribe(
      (value: string) => {
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
    if (changes['value']?.currentValue !== changes['value']?.previousValue) {
      this.matRadioButtonService.emitInputValue(this.value);
    }
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
    this.matRadioButtonSubscription?.unsubscribe();
  }
}
