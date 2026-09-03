import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private http: HttpClient = inject(HttpClient);
  private loaded = false;
  readonly versions = signal<string[]>([]);

  getAllHelixVersions(): void {
    if (this.loaded) {
      return;
    }

    const hostname = globalThis.location?.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      this.loaded = true;
      this.versions.set([]);
      return;
    }

    this.loaded = true;
    this.http
      .get<string[]>(
        'https://latest-helix-website.dev.sp.aws.clarivate.net/assets/helix-versions.json',
      )
      .pipe(catchError(() => of([])))
      .subscribe(
        (versions) => {
          this.versions.set(versions);
        },
        () => {
          this.versions.set([]);
        },
      );
  }
}
