import { Component, ViewEncapsulation } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'demo-ag-grid',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgGridDemoComponent {
  columnDefs: ColDef[] = [
    {
      field: 'make',
      checkboxSelection: true,
      sortable: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    },
    { field: 'model', sortable: true },
    { field: 'price', sortable: true },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
