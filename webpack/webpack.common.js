const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '..', 'src'),
        ],
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader:'css-loader',
                        options: {
                            url: false
                        }
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};
