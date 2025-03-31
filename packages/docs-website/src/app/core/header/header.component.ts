import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
} from '@cdx/ngx-branding';
import { Subscription } from 'rxjs';

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
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  links: NavigationLink[] = links;

  versions: string[] = [];
  versionControl = new FormControl();
  allVersionsSubscription?: Subscription;

  constructor(private router: Router, private headerService: HeaderService) {
    this.allVersionsSubscription = this.headerService
      .getAllHelixVersions()
      .subscribe((versions) => {
        this.versions = versions;

        const url = window.location.href;
        const versionMatch = url.match(/^https:\/\/v(\d+)-/);
        if (versionMatch) {
          const versionNumber = versionMatch[1];
          if (this.versions.includes(versionNumber)) {
            this.versionControl.setValue(versionNumber);
          }
        } else {
          const latestVersion = this.versions.find((version) =>
            version.includes('latest'),
          );
          if (latestVersion) {
            this.versionControl.setValue(latestVersion);
          }
        }

        this.versionControl.valueChanges.subscribe((version: string | null) => {
          if (version) {
            const currentPath = this.router.url.replace(/^\//, '');
            if (version.includes('latest')) {
              window.location.href = `https://design-lsh.clarivate.io/${currentPath}`;
            } else {
              window.location.href = `https://v${version}-helix-website.dev.sp.aws.clarivate.net/${currentPath}`;
            }
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.allVersionsSubscription?.unsubscribe;
  }
}
