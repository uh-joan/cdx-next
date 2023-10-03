import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Select',
  component: MatSelectModule,
  decorators: [
    moduleMetadata({
      imports: [
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const SelectTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Basic Select</h3>
      <div class="story">
        <mat-form-field appearance="fill">
          <mat-label>Fill</mat-label>
          <mat-select placeholder="Choose an option" panelClass="common-panel">
            <mat-option value="option1">Option 1</mat-option>
            <mat-option value="option2" disabled
              >Option 2 (disabled)</mat-option
            >
            <mat-option value="option3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Outline</mat-label>
          <mat-select placeholder="Choose an option" panelClass="common-panel">
            <mat-option value="option1">Option 1</mat-option>
            <mat-option value="option2" disabled
              >Option 2 (disabled)</mat-option
            >
            <mat-option value="option3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <h3>Disabled Select</h3>
      <div class="story">
        <mat-form-field appearance="fill">
          <mat-label>Fill</mat-label>
          <mat-select
            disabled
            placeholder="Choose an option"
            panelClass="common-panel"
          >
            <mat-option value="option1">Option 1</mat-option>
            <mat-option value="option2" disabled
              >Option 2 (disabled)</mat-option
            >
            <mat-option value="option3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Outline</mat-label>
          <mat-select
            disabled
            placeholder="Choose an option"
            panelClass="common-panel"
          >
            <mat-option value="option1">Option 1</mat-option>
            <mat-option value="option2" disabled
              >Option 2 (disabled)</mat-option
            >
            <mat-option value="option3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </ng-container>
  `,
});

export const select = SelectTemplate.bind({});
