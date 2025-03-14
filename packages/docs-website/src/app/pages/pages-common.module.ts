import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { ExternalLinkComponent } from '../components/external-link/external-link.component';
import { HighlightComponent } from '../components/highlight/highlight.component';
import { InternalLinkComponent } from '../components/internal-link/internal-link.component';
import { ExampleViewerComponent } from '../core/example-viewer/example-viewer.component';
import { PageComponent } from '../core/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightComponent,
    ExternalLinkComponent,
    InternalLinkComponent,
    MatTableModule,
    ExampleViewerComponent,
    PageComponent,
  ],
  exports: [
    CommonModule,
    HighlightComponent,
    ExternalLinkComponent,
    InternalLinkComponent,
    MatTableModule,
    MatDividerModule,
    ExampleViewerComponent,
    PageComponent,
  ],
})
export class PagesCommonModule {}
