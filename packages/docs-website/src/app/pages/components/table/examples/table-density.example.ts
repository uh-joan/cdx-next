import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (level of levels; track level) {
    <table mat-table [dataSource]="dataSource" class="hlx-table" [class]="'hlx-density-' + level">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Density {{ level }} </th>
        <td mat-cell *matCellDef="let element"> {{ element.name }} </td>
      </ng-container>
      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{ element.symbol }} </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  }
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}`;

const ELEMENT_DATA = [
  { name: 'Hydrogen', symbol: 'H' },
  { name: 'Helium', symbol: 'He' },
  { name: 'Lithium', symbol: 'Li' },
];

@Component({
  template: htmlCode,
  imports: [MatTableModule],
  styles: [styleCode],
})
class SampleComponent {
  levels = [0, -1, -2];
  displayedColumns = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export const TableDensityComponent: InputViewerComponent = {
  exampleName: 'Table Density',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// Figma rows are 48, 44 and 40px; headers are 56, 52 and 48px.
@Component({
  selector: 'app-table-density-example',
  templateUrl: './table-density-example.html',
  styleUrl: './table-density-example.scss',
  imports: [MatTableModule],
})
export class TableDensityExample {
  levels = [0, -1, -2];
  displayedColumns = ['name', 'symbol'];
  dataSource = [
    { name: 'Hydrogen', symbol: 'H' },
    { name: 'Helium', symbol: 'He' },
    { name: 'Lithium', symbol: 'Li' },
  ];
}`,
};
