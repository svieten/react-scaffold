const FlexBugFixes = require('postcss-flexbugs-fixes')
const AutoPrefixer = require('autoprefixer')

module.exports = {
    ident: 'postcss',
    plugins: [FlexBugFixes({}), AutoPrefixer]
}