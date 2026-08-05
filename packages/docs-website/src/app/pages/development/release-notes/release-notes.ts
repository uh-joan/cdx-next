import {
  Component,
  computed,
  effect,
  HostBinding,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatOption } from '@angular/material/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';

import { Page } from '../../../core/page/page';
import { ReleaseNotesService } from './release-notes.service';

@Component({
  selector: 'cdx-release-notes',
  templateUrl: './release-notes.html',
  styleUrls: ['./release-notes.scss'],
  imports: [
    Page,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    Page,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [ReleaseNotesService],
})
export class ReleaseNotes {
  @HostBinding('class') hostClass = 'cdx-section';

  private readonly releaseNotesService = inject(ReleaseNotesService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly selectedVersion = signal('');
  readonly releaseNotesHtml = signal<SafeHtml | string>('');
  private readonly routeVersion = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly allReleaseNoteFiles = toSignal(
    this.releaseNotesService.getAllReleaseNotesFiles(),
    {
      initialValue: [] as string[],
    },
  );
  readonly filesByVersion = computed(() =>
    this.groupFilesByVersion(this.allReleaseNoteFiles()),
  );
  readonly availableVersions = computed(() =>
    Object.keys(this.filesByVersion()).sort((a, b) =>
      b.localeCompare(a, undefined, { numeric: true }),
    ),
  );

  private syncVersionSelection = effect(() => {
    const availableVersions = this.availableVersions();
    if (!availableVersions.length) {
      return;
    }

    const versionFromUrl = this.routeVersion()?.get('version');
    const version =
      versionFromUrl && availableVersions.includes(versionFromUrl)
        ? versionFromUrl
        : availableVersions[0];

    if (versionFromUrl && !availableVersions.includes(versionFromUrl)) {
      this.router.navigate(['development/release-notes', version]);
      return;
    }

    if (this.selectedVersion() !== version) {
      this.selectedVersion.set(version);
    }

    void this.loadAllReleaseNotes(version);
  });

  onVersionSelected(version: string): void {
    if (!version || version === this.selectedVersion()) {
      return;
    }

    this.router.navigate(['development/release-notes', version]);
  }

  private groupFilesByVersion(files: string[]): Record<string, string[]> {
    const filesByVersion: Record<string, string[]> = {};

    files.forEach((file) => {
      const match = file.match(/RELEASE_NOTES_(v\d+)\.\d+\.\d+\.md/);
      if (match && match[1]) {
        const version = match[1];
        if (!filesByVersion[version]) {
          filesByVersion[version] = [];
        }
        filesByVersion[version].push(file);
      }
    });

    Object.keys(filesByVersion).forEach((version) => {
      filesByVersion[version].sort((a, b) => {
        const versionA = this.extractVersionNumber(a);
        const versionB = this.extractVersionNumber(b);
        return versionB.localeCompare(versionA, undefined, { numeric: true });
      });
    });

    return filesByVersion;
  }

  private extractVersionNumber(fileName: string): string {
    const match = fileName.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : '0.0.0';
  }

  async loadAllReleaseNotes(version: string): Promise<void> {
    const files = this.filesByVersion()[version] || [];

    const contents = await Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            this.releaseNotesService.getReleaseNote(file).subscribe({
              next: resolve,
              error: reject,
            });
          }),
      ),
    );

    const combinedHtml = await Promise.all(
      contents.map((content) => marked(content)),
    );

    this.releaseNotesHtml.set(
      this.sanitizer.bypassSecurityTrustHtml(combinedHtml.join('<hr>')),
    );
  }

  getFileName(file: string): string {
    return file.replace('RELEASE_NOTES_', '').replace('.md', '');
  }
}
