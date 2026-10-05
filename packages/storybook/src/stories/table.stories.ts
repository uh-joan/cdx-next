import { MatTableModule } from '@angular/material/table';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type Column = 'position' | 'name' | 'weight' | 'symbol';

type TableArgs = {
  helixStyle: boolean;
  columns: Column[];
  rowCount: number;
  alignNumbersRight: boolean;
  unitsInHeader: boolean;
  stickyHeader: boolean;
  elevated: boolean;
  showFooter: boolean;
};

type PeriodicElement = Record<Column, string | number>;

const ELEMENTS: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const NUMERIC_COLUMNS: Column[] = ['position', 'weight'];

const HEADERS: Record<Column, string> = {
  position: 'No.',
  name: 'Name',
  weight: 'Weight',
  symbol: 'Symbol',
};

function headerLabel(column: Column, unitsInHeader: boolean): string {
  return column === 'weight' && unitsInHeader
    ? `${HEADERS[column]} (u)`
    : HEADERS[column];
}

function tableTemplate(args: TableArgs): string {
  const columnDefs = (Object.keys(HEADERS) as Column[])
    .map((column) => {
      const numeric =
        args.alignNumbersRight && NUMERIC_COLUMNS.includes(column)
          ? ' style="text-align: right"'
          : '';
      return `
        <ng-container matColumnDef="${column}">
          <th mat-header-cell *matHeaderCellDef${numeric}>${headerLabel(
            column,
            args.unitsInHeader,
          )}</th>
          <td mat-cell *matCellDef="let element"${numeric}>{{ element.${column} }}</td>
          <td mat-footer-cell *matFooterCellDef${numeric}>${
            column === 'name' ? 'Total: {{ dataSource.length }}' : ''
          }</td>
        </ng-container>`;
    })
    .join('');

  return `
    <div [style.height]="stickyHeader ? '240px' : null"
      [style.overflow]="stickyHeader ? 'auto' : null"
      style="padding: 16px">
      <table mat-table [dataSource]="dataSource"
        [class.hlx-table]="helixStyle"
        [class.mat-elevation-z8]="elevated">
        ${columnDefs}
        <tr mat-header-row *matHeaderRowDef="columns; sticky: stickyHeader"></tr>
        <tr mat-row *matRowDef="let row; columns: columns"></tr>
        <tr mat-footer-row *matFooterRowDef="columns"
          [style.display]="showFooter ? null : 'none'"></tr>
      </table>
    </div>`;
}

const meta: Meta<TableArgs> = {
  title: 'Components/Table',
  decorators: [moduleMetadata({ imports: [MatTableModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix tables are Angular Material tables (`mat-table`) styled with the `hlx-table` class. Cell and header height follow the density toolbar (Foundations › Density). For large or interactive data sets use the Data grid (AG Grid).',
      },
    },
  },
  argTypes: {
    helixStyle: {
      control: 'boolean',
      description:
        'Apply the Helix table styles (`hlx-table`): minimal header background, Helix header typography and row divider color.',
    },
    columns: {
      control: 'check',
      options: Object.keys(HEADERS),
      description: 'Displayed columns (`*matHeaderRowDef` / `*matRowDef`)',
    },
    rowCount: {
      control: { type: 'range', min: 1, max: ELEMENTS.length, step: 1 },
      description: 'Number of data rows',
    },
    alignNumbersRight: {
      control: 'boolean',
      description:
        'Right-align numeric columns (Helix: align text left and numeric values right)',
    },
    unitsInHeader: {
      control: 'boolean',
      description:
        'Show the unit of measurement in the column header rather than in each cell',
    },
    stickyHeader: {
      control: 'boolean',
      description:
        'Keep the header row visible while scrolling (`sticky` on `*matHeaderRowDef`)',
    },
    elevated: {
      control: 'boolean',
      description: 'Add an elevation shadow (`mat-elevation-z8`)',
    },
    showFooter: {
      control: 'boolean',
      description: 'Add a footer row (`*matFooterRowDef`)',
    },
  },
  args: {
    helixStyle: true,
    columns: ['position', 'name', 'weight', 'symbol'],
    rowCount: 5,
    alignNumbersRight: true,
    unitsInHeader: true,
    stickyHeader: false,
    elevated: false,
    showFooter: false,
  },
  render: (args) => ({
    props: {
      ...args,
      // Keep the column order stable whatever order the checkboxes are ticked.
      columns: (Object.keys(HEADERS) as Column[]).filter((column) =>
        args.columns.includes(column),
      ),
      dataSource: ELEMENTS.slice(0, args.rowCount),
    },
    template: tableTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<TableArgs>;

export const Playground: Story = {};

export const StickyHeader: Story = {
  args: { rowCount: 10, stickyHeader: true },
};

export const WithFooter: Story = { args: { showFooter: true } };

/** The plain Angular Material table, without the Helix `hlx-table` class. */
export const WithoutHelixStyle: Story = { args: { helixStyle: false } };
