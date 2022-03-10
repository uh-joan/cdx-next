import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatRadioButtonService {
  radioButtonInputValueSubject: BehaviorSubject<string> = new BehaviorSubject(
    '',
  );
  radioButtonNewValueSubject: Subject<string> = new Subject();

  emitInputValue(value: string) {
    this.radioButtonInputValueSubject.next(value);
  }

  emitRadioButtonNewSelectedValue(value: string) {
    this.radioButtonNewValueSubject.next(value);
  }
}
