import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';

const COMPONENTS = [
  'autocomplete',
  'badge',
  'breadcrumbs',
  'buttons',
  'button-toggle',
  'card',
  'checkbox',
  'chips',
  'data-grid',
  'date-picker',
  'dialog',
  'divider',
  'expansion-panel',
  'footer',
  'form-field',
  'header',
  'highcharts',
  'icons',
  'list',
  'menu',
  'notifications',
  'paginator',
  'progress-bar',
  'progress-spinner',
  'radio-button',
  'select',
  'sidenav',
  'slide-toggle',
  'slider',
  'snackbar',
  'sort-header',
  'stepper',
  'table',
  'tabs',
  'text-area',
  'text-input',
  'toolbar',
  'tooltips',
  'tree',
];

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  searchControl = new FormControl('');

  filteredOptions?: Observable<string[]>;

  goToUrl(link: string): void {
    window.open(link, '_blank');
  }

  goToComponent(component: MatAutocompleteSelectedEvent): void {
    this.goToUrl(
      `https://digital-experience.clarivate.io/components/${component.option.value}/index.html?tab=angular`,
    );
    this.searchControl.reset();
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return COMPONENTS.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
