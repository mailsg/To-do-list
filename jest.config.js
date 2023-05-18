module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};
