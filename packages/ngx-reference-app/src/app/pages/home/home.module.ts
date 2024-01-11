import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
