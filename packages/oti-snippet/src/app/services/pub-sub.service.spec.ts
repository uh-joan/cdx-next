import { PubSubService } from './pub-sub.service';

describe('PubSubService', () => {
  let service: PubSubService<any>;

  beforeEach(() => {
    service = new PubSubService<any>();
  });

  describe('publish', () => {
    it('should invoke subscribed events when there is only one', () => {
      let count = 0;
      let value: any;
      service.subscribe((val) => {
        count++;
        value = val;
      });

      service.publish('Test');

      expect(count).toEqual(1);
      expect(value).toEqual('Test');
    });

    it('should invoke subscribed events when there are more than one', () => {
      let count = 0;
      let value1: any;
      let value2: any;
      service.subscribe((val) => {
        count++;
        value1 = val;
      });
      service.subscribe((val) => {
        count++;
        value2 = val;
      });

      service.publish('Test');

      expect(count).toEqual(2);
      expect(value1).toEqual('Test');
      expect(value2).toEqual('Test');
    });

    it('should invoke subscribed events when there are not any event', () => {
      const count = 0;
      const value = undefined;

      service.publish('Test');

      expect(count).toEqual(0);
      expect(value).toBeUndefined();
    });
  });

  describe('revoke', () => {
    it('should not invoke subscribed events when has been revoked', () => {
      let count = 0;
      let value: any;
      const subscriptionId = service.subscribe((val) => {
        count++;
        value = val;
      });

      service.revoke(subscriptionId);
      service.publish('Test');

      expect(count).toEqual(0);
      expect(value).toBeUndefined();
    });
  });
});
