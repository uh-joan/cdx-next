import { JwtExtractorService } from './jwt-extractor.service';

describe('JwtExtractorService', () => {
  let service: JwtExtractorService;
  let storage: Record<string, string>;

  beforeEach(() => {
    storage = {};
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string): string | null =>
        Object.prototype.hasOwnProperty.call(storage, key)
          ? storage[key]
          : null,
      ),
      setItem: vi.fn((key: string, value: string): void => {
        storage[key] = String(value);
      }),
      removeItem: vi.fn((key: string): void => {
        delete storage[key];
      }),
      clear: vi.fn((): void => {
        storage = {};
      }),
      key: vi.fn(
        (index: number): string | null => Object.keys(storage)[index] ?? null,
      ),
      get length(): number {
        return Object.keys(storage).length;
      },
    } satisfies Storage);

    service = new JwtExtractorService();

    localStorage.setItem('token', 'xxxxxxx');
    localStorage.setItem('ls.token', JSON.stringify({ token: 'yyyyyy' }));
    localStorage.setItem('bad.token', '{');
  });

  afterEach(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('ls.token');
    localStorage.removeItem('bad.token');
    vi.unstubAllGlobals();
  });

  describe('extract', () => {
    it('should extract token from localStorage when id contains plain text', () => {
      const token = service.extract('token');

      expect(token).toEqual('xxxxxxx');
    });

    it('should extract token from localStorage when id contains an object', () => {
      const token = service.extract('ls.token', 'token');

      expect(token).toEqual('yyyyyy');
    });

    it('should return undefined when localStorage does not contains the mentioned id', () => {
      const token = service.extract('fake');

      expect(token).toBeUndefined();
    });

    it('should return undefined when localStorage contains an object but has no value for the received attributeName', () => {
      const token = service.extract('ls.token', 'fake');

      expect(token).toBeUndefined();
    });

    it('should emit exception when localStorage an invalid JSON object for the given id', () => {
      expect(() => service.extract('bad.token', 'fake')).toThrowError(
        'Cannot extract token from { with attribute fake',
      );
    });
  });
});
