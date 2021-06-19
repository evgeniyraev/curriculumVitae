const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticRender = require('./StaticRender');

const web = {
    mode:"production",
    target:"web",
    entry: [
        path.resolve(__dirname, '../src/index.js'),
    ],
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "../public"), 
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(j|t)sx?$/,
                use:[
                    {
                        loader: 'babel-loader',
                    },
                ]
            }
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"styles.css",
        }),
    ]
};

const serverConfig = {
  mode: "production",
  target: "node",
  node: {
    __dirname: false,
  },
  entry: {
      "index.js": path.resolve(__dirname, "../src/wrapper.js"),
  },
  module: {
      rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(j|t)sx?$/,
                use:[
                    {
                        loader: 'babel-loader',
                    },
                ]
            }
      ],
  },
  output: {
      path: path.resolve(__dirname, "../dist"),
    filename: "[name]",
  },
};

module.exports = [
    web,
    serverConfig,
]
