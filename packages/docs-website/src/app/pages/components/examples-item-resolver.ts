import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

import { examplesMap } from './examples-map';

@Injectable({ providedIn: 'root' })
export class ExampleItemResolver implements Resolve<unknown[] | null> {
  private router = inject(Router);

  normalizeExampleName(raw: string): string {
    if (!raw) return '';

    const spaced = raw.replace(/-/g, ' ');
    return spaced
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  resolve(route: ActivatedRouteSnapshot) {
    const component = route.parent?.paramMap.get('component');
    const exampleName = route.paramMap.get('exampleName');

    if (!component || !exampleName) return of(null);

    const samples = examplesMap[component];
    if (!samples) {
      console.warn(`No samples  found for component "${component}"`);
      this.router.navigate([`/examples/${component}`]);
      return EMPTY;
    }

    const normalized = this.normalizeExampleName(exampleName);

    const match = Object.values(samples).find(
      (s: InputViewerComponent) => s.exampleName === normalized,
    );

    if (!match) {
      console.warn(
        `No example "${normalized}" found for component "${component}"`,
      );
      this.router.navigate([`/examples/${component}`]);
      return EMPTY;
    }

    return of([match]);
  }
}
