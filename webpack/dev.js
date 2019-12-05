const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const uiConfig = require('./ui')
const serverConfig = require('./prod')

module.exports = (shouldServer, shouldUI) => {
    const serverCompiler = Webpack(serverConfig)
    const uiCompiler = Webpack(uiConfig)

    const server = new WebpackDevServer(uiCompiler, uiConfig.devServer || {})
    server.listen(uiCOnfig.devServer.port || 8080)
}
