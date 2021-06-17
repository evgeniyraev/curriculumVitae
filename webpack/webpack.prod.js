const path = require('path');
/*
const webpack = require('webpack');
const merge = require('webpack-merge').default;
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode:"production",
    entry: [
        "@babel/polyfill",
        path.resolve(__dirname, '../src/'),
        path.resolve(__dirname, '../src/index.scss')
    ],
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        })
    ]
});
*/

module.exports = {
    mode:"production",
    entry: [
        path.resolve(__dirname, '../src/index.js'),
    ],
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "../public"), 
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                "css-loader",
                "sass-loader"
            ]
        },
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};
