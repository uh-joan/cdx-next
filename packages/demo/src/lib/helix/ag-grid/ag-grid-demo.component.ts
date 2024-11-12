import { Component, ViewEncapsulation } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'demo-ag-grid',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgGridDemoComponent {
  public rowData: any[] | null = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true },
  ];
  public columnDefs: ColDef[] = [
    {
      field: 'make',
      checkboxSelection: true,
      sortable: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    },
    { field: 'model' },
    { field: 'price', filter: 'agNumberColumnFilter' },
    {
      field: 'electric',
    },
  ];
  public defaultColDef: ColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    flex: 1,
  };
}
