import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';

import { PageComponent } from '../../../core/page/page.component';
import { PagesCommonModule } from '../../pages-common.module';
import { RadioButtonComponent } from './radio-button.component';

export const routes: Routes = [
  {
    path: '',
    component: RadioButtonComponent,
  },
];

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    RouterModule.forChild(routes),
    PageComponent,
    ExternalLinkComponent,
    MatDividerModule,
    ExampleViewerComponent,
  ],
})
export class RadioButtonModule {}
