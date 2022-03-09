import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  template: ` <mat-chip-list>
    <ng-content></ng-content>
  </mat-chip-list>`,
})
export class MatChipListWrapperComponent {}

@Component({
  template: ` <mat-chip
    [color]="color"
    [disableRipple]="disableRipple"
    [disabled]="disabled"
    [removable]="removable"
    [selectable]="selectable"
    [selected]="selected"
    [value]="value"
  >
    <ng-content></ng-content>
  </mat-chip>`,
})
export class MatChipWrapperComponent {
  @Input()
  color: ThemePalette;
  @Input()
  disableRipple?: boolean;
  @Input()
  disabled?: boolean;
  @Input()
  removable?: boolean;
  @Input()
  selectable?: boolean;
  @Input()
  selected?: boolean;
  @Input()
  value: any;
}

@Component({
  template: `
    <mat-chip
      [color]="color"
      [disableRipple]="disableRipple"
      [disabled]="disabled"
      [removable]="true"
      [selectable]="selectable"
      [selected]="selected"
      [value]="value"
    >
      <ng-content></ng-content>
      <button matChipRemove>
        <mat-icon>cancel</mat-icon>
      </button>
    </mat-chip>
  `,
})
export class MatChipRemoveWrapperComponent {
  @Input()
  color: ThemePalette;
  @Input()
  disableRipple?: boolean;
  @Input()
  disabled?: boolean;
  @Input()
  removable?: boolean;
  @Input()
  selectable?: boolean;
  @Input()
  selected?: boolean;
  @Input()
  value: any;
}

//TODO check required inputs here based on future posible use cases
@Component({
  template: ` <mat-form-field appearance="fill" style="width: 100%">
    <mat-chip-list #chipList>
      <mat-chip *ngFor="let chip of chips" (removed)="remove(chip)">
        {{ chip.name }}
        <button matChipRemove>
          <mat-icon>cancel</mat-icon>
        </button>
      </mat-chip>
    </mat-chip-list>
    <input
      [matChipInputFor]="chipList"
      [matChipInputAddOnBlur]="addOnBlur"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      (matChipInputTokenEnd)="add($event)"
    />
  </mat-form-field>`,
})
export class MatChipInputWrapperComponent {
  chips: any[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  add(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.chips.push({ name: value });
    }
    event.chipInput?.clear();
  }

  remove(fruit: any): void {
    const index = this.chips.indexOf(fruit);
    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }
}
