import { Component, effect, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  email,
  form,
  FormField,
  maxLength,
  minLength,
  required,
} from '@angular/forms/signals';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatOption,
} from '@angular/material/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormField,
  MatHint,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

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

/** Custom header component for datepicker. */
@Component({
  selector: 'app-example-header',
  styles: `
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }
  `,
  template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{ periodLabel() }}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `,
  imports: [MatButtonModule, MatIconModule],
})
export class ExampleHeaderComponent<D> {
  private _calendar = inject<MatCalendar<D>>(MatCalendar);
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter);
  private _dateFormats = inject(MAT_DATE_FORMATS);

  readonly periodLabel = signal('');

  constructor() {
    this._calendar.stateChanges.subscribe(() => {
      this.periodLabel.set(
        this._dateAdapter
          .format(
            this._calendar.activeDate,
            this._dateFormats.display.monthYearLabel,
          )
          .toLocaleUpperCase(),
      );
    });
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}

@Component({
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    FormField,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint,
    MatDatepickerModule,
    MatSuffix,
    MatSlideToggle,
    MatCheckbox,
    MatRadioGroup,
    MatRadioButton,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    TranslateModule,
  ],
  providers: [MatDatepickerModule],
})
export class Home {
  readonly searchData = signal({
    search: '',
  });

  readonly searchForm = form(this.searchData, (schemaPath) => {
    required(schemaPath.search, { message: 'Search term is required' });
  });

  readonly contactData = signal({
    name: '',
    email: '',
    birthDate: '',
    message: '',
    subscribe: false,
    agreeTerms: false,
    contactMethod: 'email',
  });

  readonly contactForm = form(this.contactData, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    minLength(schemaPath.name, 2, {
      message: 'Name must be at least 2 characters',
    });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Please enter a valid email' });
    required(schemaPath.message, { message: 'Message is required' });
    maxLength(schemaPath.message, 500, {
      message: 'Message cannot exceed 500 characters',
    });
    required(schemaPath.agreeTerms, {
      message: 'You must agree to the terms and conditions',
    });
  });

  readonly exampleHeader = ExampleHeaderComponent;
  readonly filteredOptions = signal<string[]>([]);
  readonly submitted = signal(false);
  private snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      const searchValue = this.searchForm.search().value() || '';
      this.filteredOptions.set(this._filter(searchValue));
    });
  }
  onClickLogo(): void {
    this.submitted.set(true);
    if (this.contactForm().valid()) {
      console.log('Form submitted:', this.contactData());
      this.snackBar.open('Thank you for contacting us!', 'Close', {
        duration: 5000,
      });
      this.contactData.set({
        name: '',
        email: '',
        birthDate: '',
        message: '',
        subscribe: false,
        agreeTerms: false,
        contactMethod: 'email',
      });
      this.submitted.set(false);
    }
  }

  goToUrl(link: string): void {
    window.open(link, '_blank');
  }

  goToComponent(component: MatAutocompleteSelectedEvent): void {
    this.goToUrl(
      `https://digital-experience.clarivate.io/components/${component.option.value}/index.html?tab=angular`,
    );
    this.searchData.set({ search: '' });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return COMPONENTS.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
