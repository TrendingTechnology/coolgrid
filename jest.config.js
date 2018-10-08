module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  roots: ['<rootDir>./src/'],
  setupTestFrameworkScriptFile: './tools/jest/config.ts'
}
