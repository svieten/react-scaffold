const webpack = require('webpack')
const env = require('./env.js')

module.exports = {
    entry: ['@babel/polyfill', './src/index.jsx'],
    target: 'web',
    output: {
        publicPath: env.environment.BASE_URL === '"false"' ? '/' : JSON.parse(env.environment.BASE_URL)
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['js', 'jsx', '.scss'],
        symlinks: false,
        alias: env.aliases
    },
    optimization: {
        noEmitOnErrors: true
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({$: 'jquery', jquery: 'jquery'}),
        new webpack.DefinePlugin({'process.env': env.environment})
    ]
}