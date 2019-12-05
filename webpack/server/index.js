const mrege = require('merge')
const devConfig = require('./dev')
const prodConfig = require('./prod')
const config = require('./config')

if (process.argv.includes('--dev') || process.argv.includes('-d')){
    config = merge(config, devConfig)
}
else{
    config = merge(config, uiConfig)
}

module.exports = config