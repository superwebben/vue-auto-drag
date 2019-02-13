const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            '@': path.join(__dirname, '../src', 'src'),
            vue$: 'vue/dist/vue.esm.js',
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.(scss|css)$/,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:8]'
                                }
                            },
                            { loader: 'postcss-loader' },
                            { loader: 'sass-loader' }
                        ]
                    },
                    {
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            { loader: 'css-loader' },
                            { loader: 'postcss-loader' },
                            { loader: 'sass-loader' }
                        ]
                    }
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),

        // 目录清理
        new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    ]
};