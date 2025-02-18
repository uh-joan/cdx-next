import { OtiService } from './oti.service';

describe('OTIService', () => {
  let service: OtiService;
  const otKey = 'xxxxx-ot';
  const pendoKey = 'xxxxx-pd';
  const pendoDetails = {};

  test('should create instance', () => {
    service = new OtiService();

    expect(service).toBeDefined();
  });

  describe('initialize', () => {
    test('should load OT Scripts', () => {
      service = new OtiService();

      service.initialize({
        ot_key: otKey,
      });

      expect(
        document.querySelector('script[data-domain-script]'),
      ).not.toBeNull();
      expect(
        document.querySelector('script[class=optanon-category-C0003]'),
      ).toBeNull();
    });

    test('should load Pendo Scripts', () => {
      service = new OtiService();

      service.initialize({
        ot_key: otKey,
        pendo_key: pendoKey,
        pendo_details: pendoDetails,
      });

      expect(
        document.querySelector('script[class=optanon-category-C0003]'),
      ).not.toBeNull();
    });
  });
});
