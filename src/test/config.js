const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '../../'),
  verbose: true,
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': '<rootDir>/script/staticTransformer.js',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  setupFiles: [
    '<rootDir>/src/test/global.js',
  ],
  modulePathIgnorePatterns: [
    'app.js',
    'global.js',
    'config/test.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/server/routes',
    '<rootDir>/src/test',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/server/routes',
    '<rootDir>/src/test',
  ],
  moduleNameMapper: {
    '^_test(.*)$': '<rootDir>/src/test/$1',
    '^_components/(.*)$': '<rootDir>/src/public/components/$1',
    '^_containers/(.*)$': '<rootDir>/src/public/containers/$1',
    '^_common/(.*)$': '<rootDir>/src/public/common/$1',
    '^_static/(.*)$': '<rootDir>/src/public/static/$1',
    '^_entities/(.*)$': '<rootDir>/src/public/entities/$1',
    '^_data/(.*)$': '<rootDir>/src/public/data/$1',
    '^_app/(.*)$': '<rootDir>/src/public/app/$1',
    '^_pages/(.*)$': '<rootDir>/src/public/pages/$1',
    '^_modules/(.*)$': '<rootDir>/src/server/modules/$1',
    '^_routes/(.*)$': '<rootDir>/src/server/routes/$1',
    '^_config/(.*)$': '<rootDir>/src/server/config/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: './reports/coverage',
  reporters: [
    'default',
    'jest-junit',
  ],
  testResultsProcessor: 'jest-junit',
};