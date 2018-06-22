const browserList = require('../browserList');
const config = require('../babelLoaderConfig');

config.cacheDirectory = '.tmp/jest';
// modify env preset modules type to commonjs for jest
config.presets[0] = [
    '@babel/preset-env',
    {
        loose: true,
        debug: true,
        modules: 'commonjs',
        targets: {
            browsers: browserList,
        },
    },
];

module.exports = require('babel-jest').createTransformer(config);
