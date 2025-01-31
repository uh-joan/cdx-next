import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { CdxDoComponent } from '../components/cdx-do/cdx-do.component';
import { CdxDontComponent } from '../components/cdx-dont/cdx-dont.component';
import { ExternalLinkComponent } from '../components/external-link/external-link.component';
import { HighlightComponent } from '../components/highlight/highlight.component';
import { InternalLinkComponent } from '../components/internal-link/internal-link.component';
import { ExampleViewerComponent } from '../core/example-viewer/example-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightComponent,
    ExternalLinkComponent,
    CdxDoComponent,
    CdxDontComponent,
    InternalLinkComponent,
    MatTableModule,
    ExampleViewerComponent,
  ],
  exports: [
    CommonModule,
    HighlightComponent,
    ExternalLinkComponent,
    CdxDoComponent,
    CdxDontComponent,
    InternalLinkComponent,
    MatTableModule,
    MatDividerModule,
    ExampleViewerComponent,
  ],
})
export class PagesCommonModule {}
