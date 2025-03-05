import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';
import { forkJoin } from 'rxjs';

import { ReleaseNotesService } from './release-notes.service';

@Component({
  selector: 'cdx-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss'],
})
export class ReleaseNotesComponent implements OnInit {
  @HostBinding('class') hostClass = 'cdx-section';

  versionControl: FormControl = new FormControl();
  filesByVersion: { [key: string]: string[] } = {};
  releaseNotesHtml: SafeHtml = '';

  availableVersions: string[] = [];

  constructor(
    private releaseNotesService: ReleaseNotesService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.releaseNotesService.getAllReleaseNotesFiles().subscribe((files) => {
      this.filesByVersion = {};

      files.forEach((file) => {
        const match = file.match(/RELEASE_NOTES_(v\d+)\.\d+\.\d+\.md/);
        if (match && match[1]) {
          const version = match[1];
          if (!this.filesByVersion[version]) {
            this.filesByVersion[version] = [];
          }
          this.filesByVersion[version].push(file);
        }
      });

      this.availableVersions = Object.keys(this.filesByVersion).sort((a, b) =>
        b.localeCompare(a, undefined, { numeric: true }),
      );

      Object.keys(this.filesByVersion).forEach((version) => {
        this.filesByVersion[version].sort((a, b) => {
          const versionA = this.extractVersionNumber(a);
          const versionB = this.extractVersionNumber(b);
          return versionB.localeCompare(versionA, undefined, { numeric: true });
        });
      });

      this.route.params.subscribe((params) => {
        const versionFromUrl = params['version'] || this.availableVersions[0];
        if (this.availableVersions.includes(versionFromUrl)) {
          this.versionControl.setValue(versionFromUrl);
          this.loadAllReleaseNotes(versionFromUrl);
        } else {
          this.router.navigate([
            'development/release-notes',
            this.availableVersions[0],
          ]);
        }
      });
    });

    this.versionControl.valueChanges.subscribe((selectedVersion) => {
      this.router.navigate(['development/release-notes', selectedVersion]);
      this.loadAllReleaseNotes(selectedVersion);
    });
  }

  private extractVersionNumber(fileName: string): string {
    const match = fileName.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : '0.0.0';
  }

  loadAllReleaseNotes(version: string): void {
    const files = this.filesByVersion[version] || [];

    const requests = files.map((file) =>
      this.releaseNotesService.getReleaseNote(file),
    );

    forkJoin(requests).subscribe((contents) => {
      const combinedHtml = files
        .map((file, index) => {
          return marked(contents[index]);
        })
        .join('<hr>');

      this.releaseNotesHtml =
        this.sanitizer.bypassSecurityTrustHtml(combinedHtml);
    });
  }

  getFileName(file: string): string {
    return file.replace('RELEASE_NOTES_', '').replace('.md', '');
  }
}
