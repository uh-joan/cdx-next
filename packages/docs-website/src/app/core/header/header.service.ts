import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private http: HttpClient = inject(HttpClient);

  getAllHelixVersions(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://design-lsh.clarivate.io/assets/helix-versions.json',
    );
  }
}
