import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

import { ReleaseNoteService } from './release-note.service';

@Component({
  selector: 'cdx-release-note',
  templateUrl: './release-note.component.html',
  styleUrls: ['./release-note.component.scss'],
})
export class ReleaseNoteComponent implements OnInit {
  @HostBinding('class') hostClass = 'cdx-section';
  releaseNotesHtml: SafeHtml = '';
  releaseNotesFiles: string[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private releaseNoteService: ReleaseNoteService,
    private sanitizer: DomSanitizer,
  ) {
    this.form = this.fb.group({
      version: [''],
    });
  }

  ngOnInit(): void {
    this.releaseNoteService.getAllReleaseNotesFiles().subscribe((files) => {
      this.releaseNotesFiles = files;
      if (files.length > 0) {
        this.form.get('version')?.setValue(files[0]);
        this.loadVersion();
      }
    });

    this.form.get('version')?.valueChanges.subscribe(() => this.loadVersion());
  }

  loadVersion(): void {
    const selectedVersion = this.form.get('version')?.value;
    if (selectedVersion) {
      this.releaseNoteService
        .getReleaseNote(selectedVersion)
        .subscribe((md) => {
          const htmlContent = marked(md);

          if (htmlContent instanceof Promise) {
            htmlContent
              .then((content) => {
                this.releaseNotesHtml =
                  this.sanitizer.bypassSecurityTrustHtml(content);
              })
              .catch((err) => {
                console.error('Errore durante il parsing del markdown:', err);
              });
          } else {
            this.releaseNotesHtml =
              this.sanitizer.bypassSecurityTrustHtml(htmlContent);
          }
        });
    }
  }
}
