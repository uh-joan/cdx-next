import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  ModuleRegistry,
} from 'ag-grid-community';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <ag-grid-angular
        class="sample-table"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
      />
</div>
`;
const styleCode = `.story {
  display: flex;
  justify-content: center;
}

.sample-table {
  width: 600px;
  height: 330px;
}
`;

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  template: htmlCode,
  imports: [AgGridAngular],
  styles: [styleCode],
})
class SampleComponent {
  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}

export const AgGridBasicdDefaultComponent: InputViewerComponent = {
  exampleName: 'AgGrid Demo',
  dynamicComponent: SampleComponent,
  height: 85,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  ModuleRegistry,
} from 'ag-grid-community';
import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  template: htmlCode,
  imports: [AgGridAngular],
  styles: [styleCode],
})
class SampleComponent {
  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
  `,
};
