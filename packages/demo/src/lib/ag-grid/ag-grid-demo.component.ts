import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  AgGridEvent,
  ColDef,
  ColumnApi,
  GridApi,
  GridOptions,
  ValueFormatterParams,
} from 'ag-grid-community';
import { Observable, of } from 'rxjs';

const MEDAL_EMOJIS = {
  gold: '🥇',
  silver: '🥈',
  bronze: '🥉',
};

@Component({
  selector: 'demo-ag-grid',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgGridDemoComponent {
  columnDefs: ColDef[] = [
    {
      field: 'athlete',
      hide: true,
    },
    {
      field: 'age',
      width: 95,
    },
    {
      field: 'country',
      rowGroup: true,
    },
    {
      field: 'year',
      width: 100,
    },
    {
      field: 'date',
      comparator: dateComparator,
    },
    { field: 'sport' },
    {
      field: 'bronze',
      headerName: 'Bronze Medals',
      aggFunc: 'sum',
      valueFormatter: (params: ValueFormatterParams) =>
        medalValueFormatter('bronze', params.value),
    },
    {
      field: 'silver',
      headerName: 'Silver Medals',
      aggFunc: 'sum',
      valueFormatter: (params: ValueFormatterParams) =>
        medalValueFormatter('silver', params.value),
    },
    {
      field: 'gold',
      headerName: 'Gold Medals',
      aggFunc: 'sum',
      valueFormatter: (params: ValueFormatterParams) =>
        medalValueFormatter('gold', params.value),
    },
    {
      field: 'total',
      sort: 'desc',
      headerName: 'Total Medals',
      aggFunc: 'sum',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowData$: Observable<any[]> = of([]);

  gridConfig: GridOptions = {
    defaultColDef: {
      sortable: true,
      enableRowGroup: true,
      resizable: true,
    },
    autoGroupColumnDef: {
      headerName: 'Athlete',
      field: 'athlete',
      minWidth: 250,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    },
    rowGroupPanelShow: 'always',
    rowSelection: 'multiple',
    groupSelectsChildren: true,
    suppressCellSelection: true,
    suppressAggFuncInHeader: true,
    onGridReady: (params: AgGridEvent) => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
  };

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  constructor(private http: HttpClient) {
    this.rowData$ = this.http
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json',
      );
  }
}

function medalValueFormatter(
  type: 'gold' | 'silver' | 'bronze',
  numberOfMedals: number,
) {
  if (numberOfMedals === 0) {
    return '0';
  } else if (numberOfMedals < 6) {
    let medals = '';
    for (let i = 0; i < numberOfMedals; i++) {
      medals += MEDAL_EMOJIS[type];
    }
    return medals;
  } else {
    return `${MEDAL_EMOJIS[type]} ${numberOfMedals}`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dateComparator(date1: any, date2: any) {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}

function monthToComparableNumber(
  date:
    | { length: number; substring: (arg0: number, arg1: number) => number }
    | null
    | undefined,
) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  return (
    date.substring(6, 10) +
    10000 +
    date.substring(3, 5) * 100 +
    date.substring(0, 2)
  );
}
