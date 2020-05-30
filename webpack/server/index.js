const merge = require('merge')
const devConfig = require('./dev')
const prodConfig = require('./prod')
let config = require('./config')

if (process.argv.includes('--dev') || process.argv.includes('-d')){
    config = merge(config, devConfig)
}
else{
    config = merge(config, prodConfig)
}

module.exports = config