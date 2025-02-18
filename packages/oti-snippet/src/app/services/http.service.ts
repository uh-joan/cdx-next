export class HttpService {
  private _authenticateRequest(
    xhr: XMLHttpRequest,
    token: string | undefined,
  ): void {
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }

  private _handleJSONResponse<T>(xhr: XMLHttpRequest): T {
    return JSON.parse(xhr.responseText) as T;
  }

  get<T>(url: string, authToken?: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      this._authenticateRequest(xhr, authToken);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(this._handleJSONResponse(xhr));
          } catch (error: any) {
            reject({
              status: xhr.status,
              statusText: xhr.statusText,
              error: error.message,
            });
          }
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send();
    });
  }
}
