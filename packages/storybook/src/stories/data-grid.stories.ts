// The Helix AG Grid theme. The docs app loads it globally from its styles;
// Storybook doesn't, so the story loads the published @hlx/theme-ag-grid copy
// (its package exports don't expose the CSS file, hence the relative path).
// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../theme-ag-grid/ag-theme-helix.css';

import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  type ColDef,
  ModuleRegistry,
  type RowSelectionOptions,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

type DataGridArgs = {
  rowCount: number;
  sortable: boolean;
  filter: boolean;
  floatingFilter: boolean;
  resizable: boolean;
  rowSelection: 'none' | 'singleRow' | 'multiRow';
  pagination: boolean;
  pageSize: number;
  alignNumbersRight: boolean;
  height: number;
};

type Car = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

const CARS: Car[] = [
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
  { make: 'Fiat', model: '500', price: 15774, electric: false },
  { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  { make: 'Volvo', model: 'EX30', price: 34950, electric: true },
  { make: 'Kia', model: 'Niro', price: 27290, electric: false },
  { make: 'Hyundai', model: 'Ioniq 5', price: 42600, electric: true },
  { make: 'Renault', model: 'Clio', price: 18990, electric: false },
  { make: 'BMW', model: 'i4', price: 52200, electric: true },
  { make: 'Skoda', model: 'Octavia', price: 26340, electric: false },
];

function columnDefs({ alignNumbersRight }: DataGridArgs): ColDef<Car>[] {
  return [
    { field: 'make' },
    { field: 'model' },
    {
      field: 'price',
      headerName: 'Price (USD)',
      type: alignNumbersRight ? 'rightAligned' : undefined,
      filter: 'agNumberColumnFilter',
    },
    { field: 'electric' },
  ];
}

function rowSelection({
  rowSelection,
}: DataGridArgs): RowSelectionOptions | undefined {
  return rowSelection === 'none' ? undefined : { mode: rowSelection };
}

const meta: Meta<DataGridArgs> = {
  title: 'Components/Data grid',
  decorators: [moduleMetadata({ imports: [AgGridAngular] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix data grids use AG Grid (`ag-grid-angular`) with the Helix AG Grid theme (`ag-theme-helix.css` from `@hlx/theme-ag-grid`). Use them for interactive tables with large data sets; for simple, static data use the Table component.',
      },
    },
  },
  argTypes: {
    rowCount: {
      control: { type: 'range', min: 1, max: CARS.length, step: 1 },
      description: 'Number of rows (`rowData`)',
    },
    sortable: {
      control: 'boolean',
      description:
        'Allow sorting from the column headers (`defaultColDef.sortable`)',
    },
    filter: {
      control: 'boolean',
      description:
        'Enable column filters in the header menu (`defaultColDef.filter`)',
    },
    floatingFilter: {
      control: 'boolean',
      description:
        'Show a filter row under the headers (`defaultColDef.floatingFilter`, needs `filter`)',
    },
    resizable: {
      control: 'boolean',
      description: 'Let users resize columns (`defaultColDef.resizable`)',
    },
    rowSelection: {
      control: 'inline-radio',
      options: ['none', 'singleRow', 'multiRow'],
      description: 'Row selection mode (`rowSelection.mode`)',
    },
    pagination: {
      control: 'boolean',
      description: 'Split rows into pages (`pagination`)',
    },
    pageSize: {
      control: 'select',
      options: [5, 10, 20],
      description: 'Rows per page (`paginationPageSize`)',
    },
    alignNumbersRight: {
      control: 'boolean',
      description:
        "Right-align the numeric price column (`type: 'rightAligned'`); Helix aligns text left and numeric values right",
    },
    height: {
      control: { type: 'range', min: 200, max: 600, step: 10 },
      description: 'Grid height in pixels',
    },
  },
  args: {
    rowCount: 6,
    sortable: true,
    filter: false,
    floatingFilter: false,
    resizable: true,
    rowSelection: 'none',
    pagination: false,
    pageSize: 5,
    alignNumbersRight: true,
    height: 330,
  },
  render: (args) => ({
    props: {
      ...args,
      rowData: CARS.slice(0, args.rowCount),
      colDefs: columnDefs(args),
      defaultColDef: {
        flex: 1,
        sortable: args.sortable,
        filter: args.filter,
        floatingFilter: args.filter && args.floatingFilter,
        resizable: args.resizable,
      } satisfies ColDef,
      selection: rowSelection(args),
    },
    template: `
      <div style="padding: 16px">
        <ag-grid-angular
          [style.height.px]="height"
          [rowData]="rowData"
          [columnDefs]="colDefs"
          [defaultColDef]="defaultColDef"
          [rowSelection]="selection"
          [pagination]="pagination"
          [paginationPageSize]="pageSize"
          [paginationPageSizeSelector]="[5, 10, 20]"
        />
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<DataGridArgs>;

export const Playground: Story = {};

export const FilterAndSort: Story = {
  args: { filter: true, floatingFilter: true },
};

export const MultiRowSelection: Story = { args: { rowSelection: 'multiRow' } };

export const Pagination: Story = {
  args: { rowCount: 12, pagination: true, pageSize: 5 },
};
