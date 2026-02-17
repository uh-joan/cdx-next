import { Routes } from '@angular/router';

import { Examples } from '../../core/example-page/example-page';
import { ExampleItemResolver } from './examples-item-resolver';
import { ExamplesResolver } from './examples-resolver';

export const examplesRoutes: Routes = [
  {
    path: ':component',
    resolve: { examples: ExamplesResolver },
    children: [
      {
        path: '',
        component: Examples,
      },
      {
        path: ':exampleName',
        component: Examples,
        resolve: { examples: ExampleItemResolver },
      },
    ],
  },
];
