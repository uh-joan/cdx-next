import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReleaseNotesService {
  constructor(private http: HttpClient) {}

  getAllReleaseNotesFiles(): Observable<string[]> {
    return this.http.get<string[]>('assets/release-notes/index.json');
  }

  getReleaseNote(file: string): Observable<string> {
    return this.http.get(`assets/release-notes/${file}`, {
      responseType: 'text',
    });
  }

  getLatestVersion(): Observable<string> {
    return this.getAllReleaseNotesFiles().pipe(
      map((files) => {
        const versions = files
          .map((file) => {
            const match = file.match(/RELEASE_NOTES_v(\d+\.\d+\.\d+)/);
            return match ? match[1] : null;
          })
          .filter((v) => v !== null)
          .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
        return versions.length > 0 ? versions[0] : 'v18';
      }),
    );
  }
}
