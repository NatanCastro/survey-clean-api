export default {
  roots: ['<rootDir>/src'],

  coverageProvider: 'v8',

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': '@swc/jest'
  },

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)']
}
