import { MatPaginator } from '@angular/material/paginator';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type PaginatorArgs = {
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
  hidePageSize: boolean;
  showFirstLastButtons: boolean;
  disabled: boolean;
};

const meta: Meta<PaginatorArgs> = {
  title: 'Components/Paginator',
  decorators: [moduleMetadata({ imports: [MatPaginator] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix paginators are Angular Material paginators styled by the Helix theme. Each instance needs the total number of items (`length`) and the number of items per page (`pageSize`, 50 by default).',
      },
    },
  },
  argTypes: {
    length: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items being paged',
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page (Material default: 50)',
    },
    pageIndex: {
      control: { type: 'number', min: 0 },
      description: 'Zero-based index of the current page',
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Page sizes offered in the "Items per page" select',
    },
    hidePageSize: {
      control: 'boolean',
      description: 'Hide the "Items per page" select',
    },
    showFirstLastButtons: {
      control: 'boolean',
      description: 'Show buttons to jump to the first and last page',
    },
    disabled: { control: 'boolean' },
  },
  args: {
    length: 100,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 25, 100],
    hidePageSize: false,
    showFirstLastButtons: false,
    disabled: false,
  },
  render: (args) => ({
    // The page-size select opens in the CDK overlay, outside the themed
    // story wrapper, so its panel carries the Helix theme class itself.
    props: { ...args, selectConfig: { panelClass: 'helix-theme-material' } },
    template: `
      <div style="padding: 16px">
        <mat-paginator
          [length]="length"
          [pageSize]="pageSize"
          [pageIndex]="pageIndex"
          [pageSizeOptions]="pageSizeOptions"
          [hidePageSize]="hidePageSize"
          [showFirstLastButtons]="showFirstLastButtons"
          [disabled]="disabled"
          [selectConfig]="selectConfig"
          aria-label="Select page"
        ></mat-paginator>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<PaginatorArgs>;

export const Playground: Story = {};

export const FirstLastButtons: Story = {
  args: { length: 500, pageIndex: 3, showFirstLastButtons: true },
};

export const WithoutPageSize: Story = { args: { hidePageSize: true } };

export const Disabled: Story = { args: { disabled: true } };
