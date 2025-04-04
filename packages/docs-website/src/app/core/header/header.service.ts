import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  getAllHelixVersions(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://v19-helix-website.dev.sp.aws.clarivate.net/assets/helix-versions.json',
    );
  }
}
