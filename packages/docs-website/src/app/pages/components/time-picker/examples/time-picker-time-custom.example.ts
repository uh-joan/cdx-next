import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatTimepickerModule,
  MatTimepickerOption,
} from '@angular/material/timepicker';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <div>
    <mat-form-field>
        <mat-label>Every 45 minutes</mat-label>
        <input matInput [matTimepicker]="minutesPicker">
        <mat-timepicker-toggle matIconSuffix [for]="minutesPicker"/>
        <mat-timepicker interval="45min" #minutesPicker/>
    </mat-form-field>
    </div>

    <div>
    <mat-form-field>
        <mat-label>Every 3.5 hours</mat-label>
        <input matInput [matTimepicker]="hoursPicker">
        <mat-timepicker-toggle matIconSuffix [for]="hoursPicker"/>
        <mat-timepicker interval="3.5h" #hoursPicker/>
    </mat-form-field>
    </div>

    <h3>Custom list of options</h3>

    <div>
    <mat-form-field>
        <mat-label>Pick a time of day</mat-label>
        <input matInput [matTimepicker]="customPicker">
        <mat-timepicker-toggle matIconSuffix [for]="customPicker"/>
        <mat-timepicker [options]="customOptions" #customPicker/>
    </mat-form-field>
    </div>
</div>
`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
  providers: [provideNativeDateAdapter()],
  styles: [styleCode],
})
class SampleComponent {
  customOptions: MatTimepickerOption<Date>[] = [
    { label: 'Morning', value: new Date(2024, 0, 1, 9, 0, 0) },
    { label: 'Noon', value: new Date(2024, 0, 1, 12, 0, 0) },
    { label: 'Evening', value: new Date(2024, 0, 1, 22, 0, 0) },
  ];
}

export const TimePickeCustomComponent: InputViewerComponent = {
  exampleName: 'Time Picker custom',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode: htmlCode,
  hideCss: true,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatTimepickerModule,
  MatTimepickerOption,
} from '@angular/material/timepicker';

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
  providers: [provideNativeDateAdapter()],
  styles: [styleCode],
})
class SampleComponent {
  customOptions: MatTimepickerOption<Date>[] = [
    { label: 'Morning', value: new Date(2024, 0, 1, 9, 0, 0) },
    { label: 'Noon', value: new Date(2024, 0, 1, 12, 0, 0) },
    { label: 'Evening', value: new Date(2024, 0, 1, 22, 0, 0) },
  ];
}`,
};
