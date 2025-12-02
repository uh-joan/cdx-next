import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { examplesMap } from './examples-map';

@Injectable({ providedIn: 'root' })
export class ExamplesResolver implements Resolve<unknown[]> {
  resolve(route: ActivatedRouteSnapshot) {
    const component = route.paramMap.get('component');
    if (!component) return [];

    const samples = examplesMap[component];
    if (!samples) {
      console.warn(`No examples found for component "${component}"`);
      return [];
    }

    return Object.values(samples);
  }
}
