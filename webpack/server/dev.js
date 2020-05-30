const path = require('path')
const webpack = require('webpack')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const ReloadServerPlugin = require('reload-server-webpack-plugin')
const env = require('./env')

module.exports = {
    watch: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../../../public')
    },
    stats: 'none',
    watchOptions: {
        ignored: [
            /node_modules/,
            /public\/(?!dev-index.html)/,
            '/src/**/*.*',
            '/dist/**/*.*',
            '/config/**/*.*',
            '/deployment/**/*.*',

        ]
    },
    optimization: {
        noEmitOnErrors: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
        new ReloadServerPlugin({script: path.resolve(__dirname, '../../../public/server.js')}),
        new webpack.DefinePlugin({
            'process.env': env.environment
        })
    ]
}