const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(
    webpackBaseConfig,
    {
        entry: {
            index: path.join(__dirname, '../examples', 'index.js')
        },
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'examples_dist')
        },
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            compress: true,
            host: '0.0.0.0',
            port: '22222',
            historyApiFallback: true,
            disableHostCheck: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '..', 'index.html'),
                filename: 'index.html',
                inject: 'body',
                chunksSortMode: 'none',
                minify: {
                    removeComments: true
                }
            })
        ]
    }
);