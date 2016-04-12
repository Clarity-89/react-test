//const webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    
    /* For production
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};