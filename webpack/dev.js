const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const uiConfig = require('./ui')
const serverConfig = require('./server')

module.exports = (shouldServer, shouldUI) => {
    const serverCompiler = Webpack(serverConfig)
    const uiCompiler = Webpack(uiConfig)

    const server = new WebpackDevServer(uiCompiler, uiConfig.devServer || {})
    console.log('uiConfig.devServer.port ', uiConfig.devServer.port )
    server.listen(uiConfig.devServer.port || 8080)
}
