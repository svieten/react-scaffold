const webpackDev = require('./dev')
const webpackProd = require('./prod')

const serverFlags = process.argv.includes('--server-only') || process.argv.includes('-s')
const uiFlags = process.argv.includes('--ui-only') || process.argv.includes('-u')

const shouldServer = serverFlags || (!serverFlags && !uiFlags)
const shouldUI = uiFlags || (!uiFlags && !serverFlags)

console.log('process: ', process)
if (process.argv.includes('--dev') || process.argv.includes('-d')) {
    console.log("running dev")
    webpackDev(shouldServer, shouldUI)
}
else{
    webpackProd(shouldServer, shouldUI)
}