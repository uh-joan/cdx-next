import { Service } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { examplesMap } from './examples-map';

@Service()
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
