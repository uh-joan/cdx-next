import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
} from '@cdx/ngx-branding';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../package.json';
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
    RouterLink,
    MatMenuModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
  readonly MIN_SUPPORTED_VERSION = 18;
  links: NavigationLink[] = links;

  versions = signal<string[]>([]);
  currentVersion?: string;

  private router: Router = inject(Router);
  private headerService: HeaderService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.getAllHelixVersions();
    const updateVersions = (versions: string[]) => {
      if (!versions.length) return;
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

      this.versions.set(finalVersions);
      this.updateVersionFromUrl();
    };

    updateVersions(this.headerService.versions());
    const origSet = this.headerService.versions.set;
    this.headerService.versions.set = (val: string[]) => {
      origSet.call(this.headerService.versions, val);
      updateVersions(val);
    };
  }

  onVersionSelected(version: string): void {
    if (version && version !== this.currentVersion) {
      const mainVersion = version.split('.')[0];
      const currentPath = this.router.url.replace(/^\//, '');
      window.location.href = `https://v${mainVersion}-helix-website.dev.sp.aws.clarivate.net/${currentPath}`;
    }
  }

  private updateVersionFromUrl(): void {
    const versionNumber = packageJson.version;
    const majorVersion = versionNumber.split('.')[0];
    const versions = this.versions();
    if (versions.length && majorVersion === versions[0].split('.')[0]) {
      this.currentVersion = versions[0];
    } else {
      this.currentVersion = majorVersion;
    }
  }
}
