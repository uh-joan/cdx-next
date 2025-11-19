import { Component, computed } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
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
        @for (option of filteredOptions(); track option) {
        
        <mat-option
          [value]="option"
        >
          {{ option }}
        </mat-option>
        }
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
class SampleComponent {
  autoFocus = false;
  myControl = new UntypedFormControl('');
  options: string[] = ['Apple', 'Orange', 'Banana'];

  filteredOptions = computed(() => this._filter(this.myControl.getRawValue()));

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
  filteredOptions = computed(() => this._filter(this.myControl.getRawValue()));


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}`,
};
