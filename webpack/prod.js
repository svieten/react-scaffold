const Webpack = require('webpack')
const uiConfig = require('./ui')
const serverConfig = require('./prod')


function runWebpack(type, wpconfig) {
    const compiler = Webpack(wpConfig)

    compiler.run((err, wpstats) => {
        if(err){
            console.log(`Webpack error while compiling ${err}`)
            process.exit(1)
        }else{
            console.log('Oh yeah! Wepack compiled successfully')
        }
    })
}

module.exports = (shouldServer, shouldUI) =>{
    if(shouldServer){
        runWebpack('SERVER', serverConfig)
    }

    if(shouldServer){
        runWebpack('SERVER', uiConfig)
    }
}