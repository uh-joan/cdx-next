import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta } from '@storybook/angular';

import {
  BasicAutocomplete,
  basicTemplate,
} from './basic-autocomplete.component';

export default {
  title: 'Autocomplete',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Autocomplete = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
    ],
    declarations: [BasicAutocomplete],
  },
  template: `<demo-autocomplete-basic></demo-autocomplete-basic>`,
});

Autocomplete.parameters = {
  docs: {
    source: {
      code: basicTemplate,
    },
  },
};
