/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const browserList = require('./browserList');

module.exports = {
    babelrc: false,
    cacheDirectory: '.tmp',
    presets: [
        [
            'env',
            {
                loose: true,
                modules: false,
                useBuiltIns: true,
                debug: true,
                targets: {
                    browsers: browserList,
                },
            },
        ],
        'react',
        'flow',
    ],
    plugins: [
        'syntax-dynamic-import',
        'transform-class-properties',
        'syntax-trailing-function-commas',
        [
            'transform-object-rest-spread',
            {
                useBuiltIns: true,
            },
        ],
        [
            'lodash',
            {
                id: ['lodash', 'recompose'],
            },
        ],
    ],
    env: {
        production: {
            plugins: ['transform-react-inline-elements', 'transform-react-constant-elements'],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
        development: {
            plugins: ['transform-react-jsx-self', 'transform-react-jsx-source'],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
    },
};