import { Component, HostBinding } from '@angular/core';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-icons',
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss'],
  imports: [Page, ExampleViewer, Highlight],
})
export class Icons {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  setupSnippet = `// app.config.ts — register the custom/AI/pictogram icons once.
export const appConfig: ApplicationConfig = {
  providers: [
    provideHelixIcons(), // hlx: and hlx-pictogram: namespaces, app-wide
    // …
  ],
};

// index.html — load ONE Material Symbols family (Outlined), not several.
// <link
//   href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
//   rel="stylesheet" />`;
}
