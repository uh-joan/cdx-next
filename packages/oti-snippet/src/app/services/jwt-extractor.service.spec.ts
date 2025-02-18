import { JwtExtractorService } from './jwt-extractor.service';

describe('JwtExtractorService', () => {
  let service: JwtExtractorService;

  beforeEach(() => {
    service = new JwtExtractorService();

    localStorage.setItem('token', 'xxxxxxx');
    localStorage.setItem('ls.token', JSON.stringify({ token: 'yyyyyy' }));
    localStorage.setItem('bad.token', '{');
  });

  afterEach(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('ls.token');
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
