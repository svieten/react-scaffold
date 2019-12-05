const  path = require('path')
const webpack = require('webpack')
const env = require('./env')

const config = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../../../dist/')
    },
    stats: {
        warnings: false
    },
    devtool: 'spurce-map'
}

if(env.environment.LOCAL_BUILD === '"true"') {
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env': env.environment
        })
    ]
}

module.exports = config