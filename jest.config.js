module.exports = {
  testEnvironment: 'node',

  expand: true,

  verbose: true,

  testMatch: ['**/*.test.js'],

  coverageDirectory: './test/coverage',

  collectCoverageFrom: [
    '**/packages/**/*.{js,jsx,ts,tsx}'
  ],

  coveragePathIgnorePatterns: [
    'node_modules/(?!(@next|next))',
    'examples/.'
  ],

  testPathIgnorePatterns: [
    'node_modules/(?!(@next|next))',
    'examples/.'
  ],

  transformIgnorePatterns: [
    'node_modules/(?!(@next|next))'
  ],

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx'
  ],

  modulePaths: ['<rootDir>/test/lib'],
  globalSetup: '<rootDir>/test/jest-global-setup.js',
  globalTeardown: '<rootDir>/test/jest-global-teardown.js',

  coverageReporters: ['text', 'lcov', 'cobertura'],
  reporters: [
    'default'
  ].concat(process.env.JEST_JUNIT_OUTPUT ? ['jest-junit'] : [])
}
