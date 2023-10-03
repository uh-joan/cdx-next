import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Paginator',
  component: MatPaginatorModule,
  decorators: [
    moduleMetadata({
      imports: [MatPaginatorModule, BrowserAnimationsModule, ThemeModule],
    }),
  ],
} as Meta;

const PaginatorTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Basic Paginator</h3>
      <div class="story">
        <mat-paginator
          length="100"
          pageSize="100"
          [pageSizeOptions]="[5,10,25,100]"
          aria-label="Select page"
        >
        </mat-paginator>
      </div>
    </ng-container>
  `,
});

export const paginator = PaginatorTemplate.bind({});
