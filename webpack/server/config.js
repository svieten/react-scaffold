const nodeExternals = require('webpack-node-externals')
const env = require('./env.js')

module.exports = {
    entry: ['@babel/polyfill', './server/index.js'],
    target: 'node',
    output: {
        publicPath: '/',
        filename: 'server.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['js'],
        symlinks: false,
        alias: env.aliases
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: [nodeExternals()]
}