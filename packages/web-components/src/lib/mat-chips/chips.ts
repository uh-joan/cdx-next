import { Component } from '@angular/core';

@Component({
  template: ` <mat-chip-list>
    <ng-content></ng-content>
  </mat-chip-list>`,
})
export class MatChipListWrapperComponent {}

@Component({
  template: ` <mat-chip>
    <ng-content></ng-content>
  </mat-chip>`,
})
export class MatChipWrapperComponent {}

@Component({
  template: ` <button matChipRemove>
    <mat-icon>cancel</mat-icon>
  </button>`,
})
export class MatChipRemoveWrapperComponent {}

@Component({
  template: ` <mat-form-field>
    <mat-chip-list #chipList> </mat-chip-list>
    <input [matChipInputFor]="chipList" />
  </mat-form-field>`,
})
export class MatChipInputWrapperComponent {}
