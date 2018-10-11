module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/__snapshots__/**/*.*',
    '!src/**/*.stories.{js,jsx,ts,tsx}'
    '!src/**/stories.{js,jsx,ts,tsx}'
  ],
  preset: 'ts-jest',
  verbose: false,
  coverageDirectory: './.coverage',
  testPathIgnorePatterns: ['/lib/', '/node_modules/', '/tools/'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  roots: ['<rootDir>./src/'],
  setupTestFrameworkScriptFile: './tools/jest/config.ts',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: {
        warnOnly: true
      }
    }
  }
}
