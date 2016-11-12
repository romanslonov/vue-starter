'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
    entry: {
        src: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css', '.json'],
        alias: {
            root: path.join(__dirname, '../src'),
            '@components': path.join(__dirname, '../src/components'),
            '@layouts': path.join(__dirname, '../src/layouts'),
            '@pages': path.join(__dirname, '../src/pages')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loaders: ['vue']
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.es6$/,
                loaders: ['babel']
            },
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: { name: 'static/media/[name].[hash:8].[ext]' }
            }
        ]
    },
    babel: config.babel,
    postcss: config.postcss,
    vue: {
        loaders: {},
        postcss: config.postcss
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: config.title,
            template: __dirname + '/index.html',
            filename: path.join(__dirname, '../dist/index.html')
        })
    ],
    target: 'web'
}
