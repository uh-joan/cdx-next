import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    httpService = new HttpService();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get', () => {
    it('should send a GET request with authentication header', async () => {
      const url = 'https://example.com/api';
      const authToken = 'yourAuthToken';
      const responseData = { key: 'value' };

      const xhrSpy = mockXHR(200, 'OK', responseData);
      const openSpy = vi.spyOn(xhrSpy, 'open');
      const setRequestHeaderSpy = vi.spyOn(xhrSpy, 'setRequestHeader');
      const sendSpy = vi.spyOn(xhrSpy, 'send');

      await httpService.get(url, authToken);

      expect(openSpy).toHaveBeenCalledWith('GET', url);
      expect(setRequestHeaderSpy).toHaveBeenCalledWith(
        'Authorization',
        `Bearer ${authToken}`,
      );
      expect(sendSpy).toHaveBeenCalled();

      openSpy.mockRestore();
      setRequestHeaderSpy.mockRestore();
      sendSpy.mockRestore();
    });

    it('should handle successful JSON response', async () => {
      const url = 'https://example.com/api';
      const responseData = { key: 'value' };
      mockXHR(200, 'OK', responseData);

      const result = await httpService.get(url);

      expect(result).toEqual(responseData);
    });

    it('should handle unsuccessful JSON response', async () => {
      const url = 'https://example.com/api';
      mockXHR(404, 'Not Found', 'Not Found');

      await expect(httpService.get(url)).rejects.toEqual({
        status: 404,
        statusText: 'Not Found',
      });
    });
  });

  function mockXHR(status: number, statusText: string, responseData: any) {
    const xhr: XMLHttpRequest = {
      status,
      statusText,
      responseText: JSON.stringify(responseData),
      open: vi.fn(),
      onload: vi.fn(),
      onerror: vi.fn(),
      setRequestHeader: vi.fn(),
      send: vi.fn(),
    } as any;

    setTimeout(() => {
      if (xhr.onload) {
        xhr.onload('' as any);
      }
    }, 500);

    class MockXMLHttpRequest {
      constructor() {
        return xhr;
      }
    }

    vi.stubGlobal('XMLHttpRequest', MockXMLHttpRequest);

    return xhr;
  }
});
