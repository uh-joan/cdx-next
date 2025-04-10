import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field>
    <mat-label>Meeting date</mat-label>
    <input matInput [matDatepicker]="datepicker" [(ngModel)]="value">
    <mat-datepicker #datepicker/>
    <mat-datepicker-toggle [for]="datepicker" matSuffix/>
    </mat-form-field>

    <mat-form-field>
    <mat-label>Meeting time</mat-label>
    <input matInput
        [matTimepicker]="timepicker"
        [(ngModel)]="value"
        [ngModelOptions]="{updateOn: 'blur'}">
    <mat-timepicker #timepicker/>
    <mat-timepicker-toggle [for]="timepicker" matSuffix/>
    </mat-form-field>

    <p>Value: {{value}}</p>
</div>
`;

const styleCode = `.story {
  padding: 1rem;
  width: 20rem;

  mat-form-field {
    width: 100%;
  }
}`;

@Component({
  template: htmlCode,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  styles: styleCode,
})
class SampleComponent {
  value?: Date;
}

export const TimeAndDatePickerComponent: InputViewerComponent = {
  exampleName: 'Time and Date Picker',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import {Component} from '@angular/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
  providers: [provideNativeDateAdapter()],
  styles: styleCode,
})
class SampleComponent {}`,
};
