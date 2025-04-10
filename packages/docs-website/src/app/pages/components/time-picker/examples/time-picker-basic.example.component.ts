import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<mat-form-field>
  <mat-label>Pick a time</mat-label>
  <input matInput [matTimepicker]="picker">
  <mat-timepicker-toggle matIconSuffix [for]="picker"/>
  <mat-timepicker #picker/>
</mat-form-field>`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
  providers: [provideNativeDateAdapter()],
  styles: styleCode,
})
class SampleComponent {}

export const TimePickerSimpleComponent: InputViewerComponent = {
  exampleName: 'Time Picker basic',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode: htmlCode,
  hideCss: true,
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
