module.exports = {
  verbose: true,

  testMatch: ['*/**/*.test.js'],

  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],

  modulePaths: [
    '<rootDir>/test/lib',
    '<rootDir>/packages/next/lib/',
    '<rootDir>/packages/next-server/lib/'
  ],
  globalSetup: '<rootDir>/test/jest-global-setup.js',
  globalTeardown: '<rootDir>/test/jest-global-teardown.js',

  collectCoverage: true,
  collectCoverageFrom: [
    '**/{next,next-server}/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  coverageDirectory: './test/coverage',
  coverageReporters: ['text', 'lcov', 'cobertura'],
  reporters: ['default'].concat(
    process.env.JEST_JUNIT_OUTPUT ? ['jest-junit'] : []
  ),

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  }
}
