import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
