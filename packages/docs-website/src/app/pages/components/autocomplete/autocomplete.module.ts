import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';

import { PageComponent } from '../../../core/page/page.component';
import { AutocompleteComponent } from './autocomplete.component';

export const routes: Routes = [
  {
    path: '',
    component: AutocompleteComponent,
  },
];

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    RouterModule.forChild(routes),
    ExternalLinkComponent,
    PageComponent,
    ExampleViewerComponent,
    MatDividerModule,
  ],
})
export class AutocompleteModule {}
