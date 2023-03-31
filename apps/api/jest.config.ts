import type { Config } from '@jest/types';
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',

    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    moduleNameMapper: {
      'src/(.*)': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  };
};
