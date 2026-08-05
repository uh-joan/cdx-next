import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

@Service()
export class HeaderService {
  private http: HttpClient = inject(HttpClient);
  readonly versions = signal<string[]>([]);

  getAllHelixVersions(): void {
    this.http
      .get<string[]>(
        'https://latest-helix-website.dev.sp.aws.clarivate.net/assets/helix-versions.json',
      )
      .subscribe((versions) => {
        this.versions.set(versions);
      });
  }
}
