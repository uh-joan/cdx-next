import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field appearance="outline">
        <mat-label>Choose a date range</mat-label>
        <mat-date-range-input 
            [rangePicker]="picker4">
        <input matStartDate 
            placeholder="Start date" />
        <input matEndDate 
            placeholder="End date" />
        </mat-date-range-input>
        <mat-datepicker-toggle 
            matSuffix 
            [for]="picker4"
        ></mat-datepicker-toggle>
        <mat-date-range-picker 
            #picker4></mat-date-range-picker>
    </mat-form-field>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
  ],
  styles: [styleCode],
})
class SampleComponent {}

export const RangeDatepickerComponent: InputViewerComponent = {
  exampleName: 'Range Datepicker',
  dynamicComponent: SampleComponent,
  height: 40,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    template: htmlCode,
    imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatNativeDateModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
