import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field appearance="outline">
        <mat-label>Choose a date</mat-label>
        <input
            matInput
            [matDatepicker]="picker"
            title="Please choose a Date"
            placeholder="Choose a date"
            />
        <mat-datepicker-toggle
            matSuffix
            [for]="picker"
            role="button"
            ></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
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
  styles: styleCode,
})
class SampleComponent {}

export const SimpleDatepickerComponent: InputViewerComponent = {
  exampleName: 'Simple Datepicker',
  dynamicComponent: SampleComponent,
  height: 39,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
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
    styles: styleCode,
})
class SampleComponent {}`,
};
