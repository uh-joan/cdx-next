export default {
  displayName: 'notification',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/notification',
};
