import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Toolbar',
  component: MatToolbarModule,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, ThemeModule, MatIconModule],
    }),
  ],
} as Meta;

const ToolbarTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Default Toolbar</h3>
      <div class="story">
        <mat-toolbar color="primary">
          <mat-toolbar-row>
            <div>
              <span>Toolbar</span>
            </div>
          </mat-toolbar-row>
        </mat-toolbar>
      </div>
    </ng-container>
  `,
});

const ToolbarWithMenuIconTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Toolbar with menu icon</h3>
      <div class="story">
        <mat-toolbar color="primary">
          <mat-icon aria-hidden="false" aria-label="Example heart icon"
            >menu</mat-icon
          >
          <span style="margin-left: 1rem;">My App</span>
          <span style="flex: 1 1 auto;"></span>
          <mat-icon aria-hidden="false" aria-label="Example refresh icon"
            >refresh</mat-icon
          >
          <mat-icon aria-hidden="false" aria-label="Example more vert icon"
            >more_vert</mat-icon
          >
        </mat-toolbar>
      </div>
    </ng-container>
  `,
});

export const toolbar = ToolbarTemplate.bind({});
export const toolbarWithMenuIcon = ToolbarWithMenuIconTemplate.bind({});
