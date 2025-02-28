import { Component, HostBinding, OnInit } from '@angular/core';
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

  constructor(
    private releaseNoteService: ReleaseNoteService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.releaseNoteService.getAllReleaseNotes().subscribe((allNotes) => {
      const combinedHtml = allNotes.map((md) => marked(md)).join('<hr/>');
      this.releaseNotesHtml =
        this.sanitizer.bypassSecurityTrustHtml(combinedHtml);
    });
  }
}
