import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const datepickerMeta: Meta<MatDatepicker<string>> = {
  title: 'helix/Date Picker',
  component: MatDatepicker,
  decorators: [
    moduleMetadata({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        ThemeModule,
      ],
    }),
  ],
};

export default datepickerMeta;
type DatepickerStory = StoryObj<MatDatepicker<string>>;

const DatepickerTemplate = `
    <h3>Date Picker</h3>
    <div class="story">
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
    </div>
  `;

const RangeDatepickerTemplate = `<h3>Date Picker With Range</h3>
    <div class="story">
      <mat-form-field appearance="outline">
        <mat-label>Choose a date range</mat-label>
        <mat-date-range-input [rangePicker]="picker4">
          <input matStartDate placeholder="Start date" />
          <input matEndDate placeholder="End date" />
        </mat-date-range-input>
        <mat-datepicker-toggle
          matSuffix
          [for]="picker4"
        ></mat-datepicker-toggle>
        <mat-date-range-picker #picker4></mat-date-range-picker>
      </mat-form-field>
    </div>`;

export const datepicker: DatepickerStory = {
  render: (args) => ({
    props: args,
    template: DatepickerTemplate,
  }),
};

export const rangeDatepicker: DatepickerStory = {
  render: (args) => ({
    props: args,
    template: RangeDatepickerTemplate,
  }),
};

/*
export const datepicker = DatepickerTemplate.bind({});
export const rangeDatepicker = RangeDatepickerTemplate.bind({});
*/
