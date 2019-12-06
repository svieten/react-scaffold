const  path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: path.resolve(__dirname, '../../../.env'), silent: true})

let index = null

if(process.argv.includes('--prod') || process.argv.includes('-p')){
    index = JSON.stringify('local')
}

module.exports = {
    aliases: {

    },
    environment: {

    }
}