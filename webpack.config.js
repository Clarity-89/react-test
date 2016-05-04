const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './app/src/js/main.js',
    output: {
        path: './app/dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },

    plugins: [
        /* For production
         new webpack.optimize.DedupePlugin(),
         new webpack.optimize.UglifyJsPlugin({
         minimize: true,
         compress: {
         warnings: false
         }
         }),*/
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
};