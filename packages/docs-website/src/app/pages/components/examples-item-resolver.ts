import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { InputViewerComponent } from '../../core/example-viewer/example-viewer.model';
import { findExample, getExamples } from './examples-map';

@Injectable({ providedIn: 'root' })
export class ExampleItemResolver implements Resolve<
  InputViewerComponent[] | null
> {
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot): InputViewerComponent[] | null {
    const component = route.parent?.paramMap.get('component');
    const exampleName = route.paramMap.get('exampleName');

    if (!component || !exampleName) return null;

    if (!getExamples(component)) {
      console.warn(`No samples found for component "${component}"`);
      this.router.navigate([`/examples/${component}`]);
      return null;
    }

    const match = findExample(component, exampleName);
    if (!match) {
      console.warn(
        `No example "${exampleName}" found for component "${component}"`,
      );
      this.router.navigate([`/examples/${component}`]);
      return null;
    }

    return [match];
  }
}
