const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(
    webpackBaseConfig,
    {
        entry: {
            index: path.join(__dirname, '../src', 'index.js')
        },
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        mode: 'production',
    }
);