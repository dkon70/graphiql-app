import nextJest from 'next/jest.js';
import path from 'path';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: ['text', 'lcov', 'clover'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: path.join(process.cwd(), 'coverage'),
  coveragePathIgnorePatterns: [
    'src/test/setup.ts',
    'lib/store',
    'src/pages/_document.tsx',
  ],
};

export default createJestConfig(config);
