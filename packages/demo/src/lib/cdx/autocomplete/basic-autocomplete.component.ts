import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export const basicTemplate = `<form>
<mat-form-field appearance="outline">
  <mat-label>Fruit</mat-label>
  <input
    type="text"
    placeholder="Pick one"
    aria-label="Number"
    matInput
    [formControl]="myControl"
    [matAutocomplete]="auto"
  />
  <mat-autocomplete
    #auto="matAutocomplete"
    [autoActiveFirstOption]="autoFocus"
  >
    <mat-option
      *ngFor="let option of filteredOptions | async"
      [value]="option"
    >
      {{ option }}
    </mat-option>
  </mat-autocomplete>
</mat-form-field>
</form>`;

@Component({
  selector: 'demo-autocomplete-basic',
  encapsulation: ViewEncapsulation.None,
  template: basicTemplate,
})
export class BasicAutocomplete implements OnInit {
  autoFocus = false;
  myControl = new FormControl();
  options: string[] = ['Apple', 'Orange', 'Banana'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
