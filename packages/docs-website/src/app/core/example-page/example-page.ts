import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExampleViewer } from '../example-viewer/example-viewer';
import { InputViewerComponent } from '../example-viewer/example-viewer.model';

@Component({
  selector: 'app-examples',
  template: `@for (example of examples; track example) {
    <hlx-example-viewer [inputViewerComponent]="example"></hlx-example-viewer>
  }`,
  imports: [ExampleViewer],
})
export class Examples {
  examples: InputViewerComponent[] = [];
  route = inject(ActivatedRoute);

  constructor() {
    this.examples = this.route.snapshot.data['examples'];
  }
}
