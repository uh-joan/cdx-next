import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ThemeModule } from '@cdx/theme-angular-material';

import { AvalonComplexDialogExampleComponent } from './avalon/dialog-demo/avalon-complex-dialog-example.component';
import { AvalonDialogDemoComponent } from './avalon/dialog-demo/avalon-dialog-demo.component';
import { AvalonSimpleDialogExampleComponent } from './avalon/dialog-demo/avalon-simple-dialog-example.component';
import { DialogDemoComponent } from './cdx/dialog-demo/dialog-demo.component';
import { DialogExampleComponent } from './cdx/dialog-demo/dialog-example.component';
import { SnackBarDemoComponent } from './cdx/snackbars-demo/snackbar-demo.component';
import { TableBasicDemoComponent } from './cdx/tables-demo/table-basic-demo.component';
import { TableExpandableRowsDemoComponent } from './cdx/tables-demo/table-expandable-rows-demo.component';
import { TableWithFilterSortingPaginationDemoComponent } from './cdx/tables-demo/table-with-filter-sort-pagination-demo.component';

@NgModule({
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatBadgeModule,
    ThemeModule,
  ],
  declarations: [
    SnackBarDemoComponent,
    DialogDemoComponent,
    AvalonDialogDemoComponent,
    AvalonComplexDialogExampleComponent,
    AvalonSimpleDialogExampleComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
    TableExpandableRowsDemoComponent,
    TableWithFilterSortingPaginationDemoComponent,
  ],
  exports: [
    SnackBarDemoComponent,
    DialogDemoComponent,
    AvalonDialogDemoComponent,
    AvalonComplexDialogExampleComponent,
    AvalonSimpleDialogExampleComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
    TableExpandableRowsDemoComponent,
    TableWithFilterSortingPaginationDemoComponent,
  ],
})
export class DemoModule {}
