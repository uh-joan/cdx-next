import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { PaperSearchComponent } from '../../components/paper-search/paper-search.component';

@Component({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        PaperSearchComponent,
        MatDividerModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatCardModule,
        TranslateModule,
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent {
  isSearchActivated = false;
  isFiltersOpened = false;

  activateSearch() {
    this.isSearchActivated = true;
  }

  clearSearch() {
    this.isSearchActivated = false;
    this.isFiltersOpened = false;
  }

  openCloseFilters() {
    this.isFiltersOpened = !this.isFiltersOpened;
  }
}
