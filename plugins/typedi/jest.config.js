import baseConfig from '../../jest.examples.config.js';

export default {
  ...baseConfig,
  collectCoverage: false,
  testRegex: 'plugins/simple-di/test/.*.spec.ts$',
};
