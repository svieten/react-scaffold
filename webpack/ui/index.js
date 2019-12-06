const mrege = require('merge')
const devConfig = require('./dev')
const prodConfig = require('./prod')
let config = require('./config')
const shelljs = require('shelljs')

const serverFlags = process.argv.includes('--server-only') || process.argv.includes('-s')
const uiFlags = process.argv.includes('--ui-only') || process.argv.includes('-u')

const shouldUI = uiFlags || (!uiFlags && !serverFlags)

if (process.argv.includes('--dev') || process.argv.includes('-d')){
    config = merge(config, devConfig)
}
else{
    if(shouldUI){
        shelljs.rm('rf', 'dist/build')
    }
    config = merge(config, uiConfig)
}

module.exports = config