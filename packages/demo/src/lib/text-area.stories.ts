import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Text Area',
  component: MatInputModule,
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const TextAreaTemplate: StoryFn = () => ({
  template: html`
    <h3>Text Area</h3>
    <div class="story">
      <mat-form-field appearance="fill" class="mat-form-field-textarea wide">
        <textarea
          matInput
          placeholder="Textarea"
          #message
          maxlength="256"
        ></textarea>
        <mat-label>Filled text area</mat-label>
      </mat-form-field>
      <mat-form-field appearance="outline" class="mat-form-field-textarea wide">
        <textarea
          matInput
          placeholder="Textarea"
          #message
          maxlength="256"
        ></textarea>
        <mat-label>Outlined text area</mat-label>
      </mat-form-field>
    </div>
  `,
});

export const textArea = TextAreaTemplate.bind({});
