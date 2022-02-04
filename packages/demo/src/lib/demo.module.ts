import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogExampleComponent } from './dialog-demo/dialog-example.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SnackBarDemoComponent } from './snackbar-demo/snackbar.component';
import { TableBasicDemoComponent } from './table-demo/table-demo.component';

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
  ],
  declarations: [
    InputDemoComponent,
    SnackBarDemoComponent,
    DialogDemoComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
  ],
  exports: [
    InputDemoComponent,
    SnackBarDemoComponent,
    DialogDemoComponent,
    DialogExampleComponent,
    TableBasicDemoComponent,
  ],
})
export class DemoModule {}
