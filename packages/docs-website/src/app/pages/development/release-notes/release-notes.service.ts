import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReleaseNotesService {
  private http = inject(HttpClient);

  getAllReleaseNotesFiles() {
    return this.http.get<string[]>(
      'https://design-lsh.clarivate.io/assets/release-notes/index.json',
    );
  }

  getReleaseNote(file: string) {
    return this.http.get(`assets/release-notes/${file}`, {
      responseType: 'text',
    });
  }

  async getLatestVersion(): Promise<string> {
    const files = await new Promise<string[]>((resolve, reject) => {
      this.getAllReleaseNotesFiles().subscribe({
        next: resolve,
        error: reject,
      });
    });
    const versions = files
      .map((file) => {
        const match = file.match(/RELEASE_NOTES_v(\d+\.\d+\.\d+)/);
        return match ? match[1] : null;
      })
      .filter((v): v is string => v !== null)
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

    return versions.length > 0 ? versions[0] : 'v18';
  }
}
