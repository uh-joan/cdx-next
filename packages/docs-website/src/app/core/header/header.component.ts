import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
} from '@cdx/ngx-branding';
import { first } from 'rxjs';

import { SearchComponent } from '../search/search.component';
import { links, NavigationLink } from './header.config';
import { HeaderService } from './header.service';

@Component({
  selector: 'web-hlx-header',
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    SearchComponent,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly MIN_SUPPORTED_VERSION = 18;
  links: NavigationLink[] = links;

  versions: string[] = [];
  currentVersion?: string;

  constructor(private router: Router, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService
      .getAllHelixVersions()
      .pipe(first())
      .subscribe((versions) => {
        const filteredAndSorted = versions
          .filter((version) => {
            const major = parseInt(version.split('.')[0], 10);
            return major >= this.MIN_SUPPORTED_VERSION;
          })
          .sort((a, b) => {
            const versionA = a.split('.').map(Number);
            const versionB = b.split('.').map(Number);
            for (
              let i = 0;
              i < Math.min(versionA.length, versionB.length);
              i++
            ) {
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

        this.versions = finalVersions;
        this.updateVersionFromUrl();
      });
  }

  onVersionSelected(version: string): void {
    if (version && version !== this.currentVersion) {
      const mainVersion = version.split('.')[0];
      const currentPath = this.router.url.replace(/^\//, '');
      window.location.href = `https://v${mainVersion}-helix-website.dev.sp.aws.clarivate.net/${currentPath}`;
    }
  }

  private updateVersionFromUrl(): void {
    const versionMatch = window.location.href.match(/^https:\/\/v(\d+)-/);
    const versionNumber = versionMatch && versionMatch[1];
    const mainVersions = this.versions.map((version) => version.split('.')[0]);
    const matchingVersion = this.versions.find((version) =>
      version.startsWith(versionNumber + '.'),
    );
    if (
      versionNumber &&
      mainVersions.includes(versionNumber) &&
      matchingVersion
    ) {
      this.currentVersion = matchingVersion;
    } else {
      this.currentVersion = this.versions[0];
    }
  }
}
