import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogExampleComponent } from './dialog-demo/dialog-example.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SliderConfigurableDemoComponent } from './sliders-demo/slider-configurable-demo.component';
import { SliderCustomThumbComponent } from './sliders-demo/slider-custom-thumb-demo.component';
import { SnackBarCustomDemoComponent } from './snackbars-demo/snackbar-custom-demo.component';
import { SnackBarDemoComponent } from './snackbars-demo/snackbar-demo.component';
import { SnackBarPositionDemoComponent } from './snackbars-demo/snackbar-position-demo.component';
import { TableBasicDemoComponent } from './tables-demo/table-basic-demo.component';
import { TableExpandableRowsDemoComponent } from './tables-demo/table-expandable-rows-demo.component';
import { TableWithFilterSortingPaginationDemoComponent } from './tables-demo/table-with-filter-sort-pagination-demo.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
  ],
  declarations: [
    InputDemoComponent,
    SnackBarDemoComponent,
    DialogDemoComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
    TableExpandableRowsDemoComponent,
    TableWithFilterSortingPaginationDemoComponent,
    SnackBarPositionDemoComponent,
    SnackBarCustomDemoComponent,
    SliderConfigurableDemoComponent,
    SliderCustomThumbComponent,
  ],
  exports: [
    InputDemoComponent,
    SnackBarDemoComponent,
    DialogDemoComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
    TableExpandableRowsDemoComponent,
    TableWithFilterSortingPaginationDemoComponent,
    SnackBarPositionDemoComponent,
    SnackBarCustomDemoComponent,
    SliderConfigurableDemoComponent,
    SliderCustomThumbComponent,
  ],
})
export class DemoModule {}
