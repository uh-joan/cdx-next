import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ReleaseNotesService } from './release-notes.service';

@Injectable({
  providedIn: 'root',
})
export class VersionResolver implements Resolve<string> {
  constructor(private releaseNotesService: ReleaseNotesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const versionFromUrl = route.paramMap.get('version');

    if (versionFromUrl) {
      return of(versionFromUrl);
    } else {
      return this.releaseNotesService.getLatestVersion();
    }
  }
}
