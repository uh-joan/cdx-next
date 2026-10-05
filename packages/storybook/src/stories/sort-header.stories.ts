import {
  MatSortModule,
  type Sort,
  type SortDirection,
} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type Column = 'name' | 'calories' | 'fat' | 'carbs' | 'protein';

type SortHeaderArgs = {
  active: Column | '';
  direction: SortDirection;
  start: 'asc' | 'desc';
  disableClear: boolean;
  disabled: boolean;
  arrowPosition: 'after' | 'before';
  disabledColumn: Column | '';
};

type Dessert = Record<Column, string | number> & { name: string };

const DESSERTS: Dessert[] = [
  { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
  { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
  { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
];

const HEADERS: Record<Column, string> = {
  name: 'Dessert (100g)',
  calories: 'Calories',
  fat: 'Fat (g)',
  carbs: 'Carbs (g)',
  protein: 'Protein (g)',
};

const COLUMNS = Object.keys(HEADERS) as Column[];

function sortDesserts(sort: Sort): Dessert[] {
  const data = DESSERTS.slice();
  if (!sort.active || sort.direction === '') {
    return data;
  }
  const key = sort.active as Column;
  const factor = sort.direction === 'asc' ? 1 : -1;
  return data.sort((a, b) => (a[key] < b[key] ? -1 : 1) * factor);
}

function sortHeaderTemplate(): string {
  const columnDefs = COLUMNS.map(
    (column) => `
      <ng-container matColumnDef="${column}">
        <th mat-header-cell *matHeaderCellDef
          mat-sort-header="${column}"
          [arrowPosition]="arrowPosition"
          [disabled]="disabledColumn === '${column}'"
          sortActionDescription="Sort by ${HEADERS[column]}"
          ${column === 'name' ? '' : 'style="text-align: right"'}>
          ${HEADERS[column]}
        </th>
        <td mat-cell *matCellDef="let row"
          ${column === 'name' ? '' : 'style="text-align: right"'}>{{ row.${column} }}</td>
      </ng-container>`,
  ).join('');

  return `
    <div style="padding: 16px">
      <table mat-table class="hlx-table" [dataSource]="rows"
        matSort
        [matSortActive]="active"
        [matSortDirection]="direction"
        [matSortStart]="start"
        [matSortDisableClear]="disableClear"
        [matSortDisabled]="disabled"
        (matSortChange)="onSortChange($event)">
        ${columnDefs}
        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns"></tr>
      </table>
    </div>`;
}

const meta: Meta<SortHeaderArgs> = {
  title: 'Components/Sort header',
  decorators: [moduleMetadata({ imports: [MatTableModule, MatSortModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Sort headers (`matSort` + `mat-sort-header`) add sorting to a Helix table (`hlx-table`). By default each header toggles ascending, descending, then back to unsorted.',
      },
    },
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['', ...COLUMNS],
      description: 'Initially sorted column (`matSortActive`)',
    },
    direction: {
      control: 'inline-radio',
      options: ['', 'asc', 'desc'],
      description: 'Initial sort direction (`matSortDirection`)',
    },
    start: {
      control: 'inline-radio',
      options: ['asc', 'desc'],
      description:
        'First direction applied when a header is clicked (`matSortStart`)',
    },
    disableClear: {
      control: 'boolean',
      description:
        'Only toggle between ascending and descending, never back to unsorted (`matSortDisableClear`)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable sorting on every header (`matSortDisabled`)',
    },
    arrowPosition: {
      control: 'inline-radio',
      options: ['after', 'before'],
      description: 'Side of the label the sort arrow sits on (`arrowPosition`)',
    },
    disabledColumn: {
      control: 'select',
      options: ['', ...COLUMNS],
      description:
        'Disable sorting on a single header (`disabled` on `mat-sort-header`)',
    },
  },
  args: {
    active: '',
    direction: '',
    start: 'asc',
    disableClear: false,
    disabled: false,
    arrowPosition: 'after',
    disabledColumn: '',
  },
  render: (args) => ({
    props: {
      ...args,
      columns: COLUMNS,
      rows: sortDesserts({ active: args.active, direction: args.direction }),
      onSortChange(this: { rows: Dessert[] }, sort: Sort) {
        this.rows = sortDesserts(sort);
      },
    },
    template: sortHeaderTemplate(),
  }),
};

export default meta;
type Story = StoryObj<SortHeaderArgs>;

export const Playground: Story = {};

export const SortedDescending: Story = {
  args: { active: 'calories', direction: 'desc' },
};

export const DisableClear: Story = {
  args: { active: 'name', direction: 'asc', disableClear: true },
};

export const ArrowBefore: Story = { args: { arrowPosition: 'before' } };
