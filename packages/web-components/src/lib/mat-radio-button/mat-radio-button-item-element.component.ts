import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Subscription } from 'rxjs';

import { LabelPosition } from '../utils/web-components.interface';
import { MatRadioButtonService } from './mat-radio-button.service';

@Component({
  template: `
    <mat-radio-button
      [value]="value"
      [checked]="checked"
      [labelPosition]="labelPosition"
      (change)="emitValue($event)"
      ><ng-content></ng-content>
    </mat-radio-button>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatRadioButtonItemComponent implements OnInit, OnDestroy {
  @Input() value = '';
  @Input() selected = '';
  @Input() labelPosition: LabelPosition = 'after';

  checked = false;

  radioButtonInputValueSubscription?: Subscription;

  constructor(
    private matRadioButtonService: MatRadioButtonService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  emitValue(event: MatRadioChange) {
    this.matRadioButtonService.emitRadioButtonNewSelectedValue(event.value);
  }

  ngOnInit(): void {
    this.radioButtonInputValueSubscription =
      this.matRadioButtonService.radioButtonInputValueSubject.subscribe(
        (value) => {
          if (value === this.value) {
            this.checked = true;
            this.changeDetectorRef.markForCheck();
          }
        },
      );
  }

  ngOnDestroy(): void {
    this.radioButtonInputValueSubscription?.unsubscribe();
  }
}
