var path = require('path');
const webpack = require('webpack');

const loaders = {
    fileLoader: {
        test: /\.(eot|svg|ttf|woff|woff2|jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
    },
    jsxLoader: {
        test: /\.jsx?$/,
        exclude: /node_modules|typescript|\.test\.js/,
        loader: 'babel-loader',
    },
    jsonLoader: {
        test: /\.json$/,
        loader: 'json-loader'
    },
    scssLoader: {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader',
    },
    cssLoader: {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
    }
};
const app = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            loaders.fileLoader,
            loaders.jsonLoader,
            loaders.jsxLoader,
            loaders.scssLoader,
            loaders.cssLoader
        ]
    }
};
module.exports = [
    app
]
