import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: false }],
    '^.+\\.(js|mjs|cjs)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(azure-devops-ui)/)'],
  moduleNameMapper: {
    '^azure-devops-extension-sdk$': '<rootDir>/__mocks__/azure-devops-extension-sdk.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
