import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatInputErrorService {
  isErrorStatus = false;
  validateOnTouch = true;
  validateOnDirty = true;
  isSubmitted = false;

  setErrorStatuses(
    error: boolean,
    validateOnTouch: boolean,
    validateOnDirty: boolean,
    isSubmitted: boolean,
  ) {
    this.isErrorStatus = error;
    this.validateOnTouch = validateOnTouch;
    this.validateOnDirty = validateOnDirty;
    this.isSubmitted = isSubmitted;
  }
}
