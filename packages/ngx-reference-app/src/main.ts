import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  // Production mode is enabled by default in Angular 17+
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
