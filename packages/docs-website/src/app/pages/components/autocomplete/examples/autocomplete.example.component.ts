import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <form>
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
  </form>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  styles: styleCode,
})
class SampleComponent implements OnInit {
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

export const AutocompleteComponent: InputViewerComponent = {
  exampleName: 'Autocomplete',
  dynamicComponent: SampleComponent,
  height: 50,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

@Component({
  template: htmlCode,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  styles: styleCode,
})
class SampleComponent implements OnInit {
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
}`,
};
