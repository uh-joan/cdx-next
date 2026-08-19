import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;
  let spyOnConsoleLog: MockInstance;

  beforeEach(() => {
    service = new LogService();
    spyOnConsoleLog = vi.spyOn(console, 'log');
  });

  afterEach(() => {
    spyOnConsoleLog.mockClear();
  });

  afterAll(() => {
    spyOnConsoleLog.mockRestore();
  });

  it('should print log by console when debug is enabled', () => {
    service.setDebug(true);

    service.log('Print debug');

    expect(spyOnConsoleLog).toHaveBeenCalledWith('Print debug');

    spyOnConsoleLog.mockClear();
  });

  it('should not print log by console when debug is disabled', () => {
    service.setDebug(false);

    service.log('Do not print debug');

    expect(spyOnConsoleLog).not.toHaveBeenCalled();
  });
});
