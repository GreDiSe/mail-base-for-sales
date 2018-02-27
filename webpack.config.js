const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015", "stage-0",  "react" ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    }
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
    }
};