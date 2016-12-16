var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/static/scripts/jsx/index.js',
    output: {
        path: './app/static/scripts/js',
        publicPath: 'http://localhost:8080/project/static/scripts/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    devServer: {
        colors: true,
        progress: true,
        inline: true
    }
};