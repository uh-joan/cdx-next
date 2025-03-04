import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReleaseNoteService {
  constructor(private http: HttpClient) {}

  getAllReleaseNotes(): Observable<string[]> {
    return this.http.get<string[]>('assets/release-notes/index.json').pipe(
      switchMap((files) => {
        const requests = files.map((file) =>
          this.http.get(`assets/release-notes/${file}`, {
            responseType: 'text',
          }),
        );
        return forkJoin(requests);
      }),
    );
  }

  getAllReleaseNotesFiles(): Observable<string[]> {
    return this.http.get<string[]>('assets/release-notes/index.json');
  }

  getReleaseNote(file: string): Observable<string> {
    return this.http.get(`assets/release-notes/${file}`, {
      responseType: 'text',
    });
  }
}
