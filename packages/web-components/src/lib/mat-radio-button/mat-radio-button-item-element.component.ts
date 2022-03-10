import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Subscription } from 'rxjs';

import { MatRadioButtonService } from './mat-radio-button.service';

@Component({
  template: `
    <mat-radio-button
      [value]="value"
      [checked]="checked"
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

  checked = false;

  radioButtonInputValueSubscription?: Subscription;

  constructor(private matRadioButtonService: MatRadioButtonService) {}

  emitValue(event: MatRadioChange) {
    this.matRadioButtonService.emitRadioButtonNewSelectedValue(event.value);
  }

  ngOnInit(): void {
    this.radioButtonInputValueSubscription =
      this.matRadioButtonService.radioButtonInputValueSubject.subscribe(
        (value) => {
          if (value === this.value) {
            this.checked = true;
          }
        },
      );
  }

  ngOnDestroy(): void {
    this.radioButtonInputValueSubscription?.unsubscribe();
  }
}
