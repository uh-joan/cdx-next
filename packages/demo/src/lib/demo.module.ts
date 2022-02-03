import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  declarations: [InputDemoComponent],
  exports: [InputDemoComponent]
})
export class DemoModule {}
