import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv();

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => ({}),
  } as Response),
);

global.Request = jest.fn().mockImplementation((url, options) => ({
  url,
  ...options,
}));
