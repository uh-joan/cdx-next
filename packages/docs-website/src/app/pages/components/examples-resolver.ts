import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { InputViewerComponent } from '../../core/example-viewer/example-viewer.model';
import { getExamples } from './examples-map';

@Injectable({ providedIn: 'root' })
export class ExamplesResolver implements Resolve<InputViewerComponent[]> {
  resolve(route: ActivatedRouteSnapshot) {
    const component = route.paramMap.get('component');
    if (!component) return [];

    const samples = getExamples(component);
    if (!samples) {
      console.warn(`No examples found for component "${component}"`);
      return [];
    }

    return samples;
  }
}
