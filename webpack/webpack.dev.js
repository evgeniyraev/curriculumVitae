const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge').default;
const commonConfig = require('./webpack.common');

const web = merge(commonConfig, {
    mode:"development",
    devServer: {
        host:"0.0.0.0",
        hot:true,
        historyApiFallback: true,
        proxy: [{
            context: [
                '/api',
            ],
            target: 'http://devpi.local/',
            changeOrigin: true,
        }],
        contentBase:path.join(__dirname, '../public'),
        /*
        setup: function(app, server) {
            app.get('/some/path', function(req, res) {
                res.json({ custom: 'response' });
            });
        }
        */
    }
});

module.exports = web
