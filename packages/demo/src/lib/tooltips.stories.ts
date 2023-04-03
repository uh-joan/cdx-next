import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Tooltips',
  component: MatTooltipModule,
  decorators: [
    moduleMetadata({
      imports: [
        MatTooltipModule,
        ThemeModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta;

const TooltipsTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Tooltip</h3>
      <div class="story story--sections">
        <button
          mat-flat-button
          color="primary"
          matTooltip="Info about the action"
          aria-label="Button that displays a tooltip when focused or hovered over"
        >
          Action
        </button>
        <mat-icon matTooltip="More information here">help_outline</mat-icon>
      </div>
    </ng-container>
  `,
});

export const tooltips = TooltipsTemplate.bind({});
