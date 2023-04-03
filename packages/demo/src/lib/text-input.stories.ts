import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Text Input',
  component: MatInput,
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

const TextInputTemplate: Story = () => ({
  template: html`
    <h3>Text Input</h3>
    <div class="story">
      <mat-form-field appearance="fill">
        <mat-label>Filled text input</mat-label>
        <input matInput title="Please enter text" placeholder="Placeholder" />
        <mat-hint>Helper text</mat-hint>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Outlined text input</mat-label>
        <input matInput title="Please enter text" placeholder="Placeholder" />
        <mat-hint>Helper text</mat-hint>
      </mat-form-field>
      <mat-form-field appearance="standard">
        <mat-label>Standard text input</mat-label>
        <input matInput title="Please enter text" placeholder="Placeholder" />
        <mat-hint>Helper text</mat-hint>
      </mat-form-field>
    </div>
  `,
});

export const textInput = TextInputTemplate.bind({});
