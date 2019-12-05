const  path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: path.resolve(__dirname, '../../../.env'), silent: true})

let index = null

if(process.argv.includes('--dev') || process.argv.includes('-d')){
    index = JSON.stringify('public/dev-index.html')
}

module.exports = {
    aliases: {

    },
    environment: {

    }
}