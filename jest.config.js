/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const config = {
    rootDir: 'src',
    preset: 'jest-puppeteer',
    cacheDirectory: '../.tmp/jest',
    coverageDirectory: '../.tmp/coverage',
    transform: {
        '^.+\\.js$': '<rootDir>/config/jest/transformer.js',
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/jest/mocks/fileMock.js',
        '\\.(css)$': '<rootDir>/config/jest/mocks/styleMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/'],
    globals: {
        __DEV__: true,
        __PROD__: false,
        __BROWSER__: true,
        __SERVER__: false,
    },
    notify: false,
    notifyMode: 'failure',
};

module.exports = config;
