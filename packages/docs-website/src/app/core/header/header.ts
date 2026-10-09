import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
} from '@hlx/ngx-branding';

import { APP_VERSION } from '../app-version';
import { Search } from '../search/search';
import { links, NavigationLink } from './header.config';
import { HeaderService } from './header.service';

@Component({
  selector: 'web-hlx-header',
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    Search,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatMenuModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
  static readonly COMPACT_QUERY = '(max-width: 1023.98px)';
  static readonly NARROW_QUERY = '(max-width: 599.98px)';

  readonly MIN_SUPPORTED_VERSION = 18;
  links: NavigationLink[] = links;

  private router: Router = inject(Router);
  private headerService: HeaderService = inject(HeaderService);
  private readonly appVersion = APP_VERSION;

  private readonly viewport = toSignal(
    inject(BreakpointObserver).observe([
      Header.COMPACT_QUERY,
      Header.NARROW_QUERY,
    ]),
  );

  readonly isCompact = computed(
    () => this.viewport()?.breakpoints[Header.COMPACT_QUERY] ?? false,
  );
  readonly isNarrow = computed(
    () => this.viewport()?.breakpoints[Header.NARROW_QUERY] ?? false,
  );

  readonly versions = computed(() =>
    this.normalizeVersions(this.headerService.versions()),
  );
  readonly currentVersion = computed(() => {
    const versionNumber = this.appVersion;
    const majorVersion = versionNumber.split('.')[0];
    const versions = this.versions();

    if (versions.length && majorVersion === versions[0].split('.')[0]) {
      return versions[0];
    }

    return majorVersion;
  });

  ngOnInit(): void {
    this.headerService.getAllHelixVersions();
  }

  onVersionSelected(version: string): void {
    if (version && version !== this.currentVersion()) {
      const mainVersion = version.split('.')[0];
      const currentPath = this.router.url.replace(/^\//, '');
      window.location.href = `https://v${mainVersion}-helix-website.dev.sp.aws.clarivate.net/${currentPath}`;
    }
  }

  private normalizeVersions(versions: string[]): string[] {
    if (!versions.length) return [];

    const filteredAndSorted = versions
      .filter((version) => {
        const major = parseInt(version.split('.')[0], 10);
        return major >= this.MIN_SUPPORTED_VERSION;
      })
      .sort((a, b) => {
        const versionA = a.split('.').map(Number);
        const versionB = b.split('.').map(Number);
        for (let i = 0; i < Math.min(versionA.length, versionB.length); i++) {
          if (versionA[i] > versionB[i]) return -1;
          if (versionA[i] < versionB[i]) return 1;
        }
        return 0;
      });

    const seenMajors = new Set<string>();
    const finalVersions: string[] = [];

    for (const version of filteredAndSorted) {
      const major = version.split('.')[0];
      if (!seenMajors.has(major)) {
        seenMajors.add(major);
        finalVersions.push(version);
      }
    }

    if (finalVersions.length > 0) {
      finalVersions[0] += ' (latest)';
      for (let i = 1; i < finalVersions.length; i++) {
        finalVersions[i] = finalVersions[i].split('.')[0];
      }
    }

    return finalVersions;
  }
}
