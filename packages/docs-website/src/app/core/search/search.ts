import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { NavigationItem, navigationMap } from './search.config';

@Component({
  selector: 'cdx-search',
  templateUrl: './search.html',
  styleUrls: ['./search.scss'],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
})
export class Search {
  @ViewChild('searchInput') searchInput!: ElementRef;

  private router: Router = inject(Router);

  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  filteredOptions: NavigationItem[] = [];
  isSearchVisible = false;

  onSearchIconClick(): void {
    this.isSearchVisible = true;
    this.searchInput.nativeElement.focus();
  }

  onSearchInput(): void {
    const query = this.searchForm.value.query || '';
    if (query.length > 2) {
      this.filteredOptions = this.filterNavigation(query);
    } else {
      this.filteredOptions = [];
    }
  }

  onEscapeKey(): void {
    this.isSearchVisible = false;
  }

  onCloseSearchClick(event: MouseEvent): void {
    event.stopPropagation();
    this.resetSearch();
  }

  onSelectRoute(selectedRoute: string): void {
    if (selectedRoute) {
      this.router.navigate([selectedRoute]);
      this.resetSearch();
    }
  }

  resetSearch(): void {
    this.filteredOptions = [];
    this.searchForm.reset();
    this.isSearchVisible = false;
  }

  displayOption(option: NavigationItem | null): string {
    return option ? option.title : '';
  }

  filterNavigation(query: string) {
    return navigationMap.filter((item: NavigationItem) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
