import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ReleaseNotesService } from './release-notes.service';

@Injectable({
  providedIn: 'root',
})
export class VersionResolver implements Resolve<string> {
  private releaseNotesService: ReleaseNotesService =
    inject(ReleaseNotesService);

  resolve(route: ActivatedRouteSnapshot): string | Promise<string> {
    const versionFromUrl = route.paramMap.get('version');

    if (versionFromUrl) {
      return versionFromUrl;
    }

    return this.releaseNotesService.getLatestVersion();
  }
}
