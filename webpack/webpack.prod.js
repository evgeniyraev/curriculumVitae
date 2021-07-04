const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                    {
                        loader:"css-loader",
                        options: {
                            url: false
                        }
                    },
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
  mode: "development",
  target: "node",
  name:"static",
  entry: {
      "wrapper.js": path.resolve(__dirname, "../src/wrapper.js"),
      "OpenGraphImage.js": path.resolve(__dirname, "../src/OpenGraphImage.js"),
  },
  module: {
      rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader:"css-loader",
                        options: {
                            url: false
                        }
                    },
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
      library: {
          name:"CV",
          type: 'commonjs',
      }
  },
};

const print = {
    ...serverConfig,
    entry: {
        "print.js": path.resolve(__dirname, "../src/wrapper.js"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'print.html',
            inject:false,
            inlineSource: '.(css)$',
        }),
    ]
}

module.exports = [
    web,
    serverConfig,
]
