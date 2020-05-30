const path = require('path')
const webpack = require('webpack')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/dev-server'],
    output: {
        path: path.resolve(__dirname, '../../public'),
        filename: 'build/build.js'
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3000,
        overlay: {
            errors: true,
            warnings: true
        },
        compress: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../../../public'),
        historyApiFallback: true,
        hot: true,
        stats: 'none',
        logLevel: 'silent',
        watchOptions: {
            ignored: [
                /node_modules/,
                /public\/(?!dev-index.html)/,
                '/src/**/*.*',
                '/dist/**/*.*',
                '/config/**/*.*',
                '/deployment/**/*.*'
            ]

    },
    proxy: {
        '/**': {
            target: 'http://localhost:4000',
            secure: false,
            bypass(req) {
                if (req.url.indexOf('build/') > -1) {
                    return true
                }
                return false
            }
        }
    }
},
    optimization: {
        namedModules: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(
                                    __dirname, '../../../postcss.config.js'
                                )
                            }
                        }
                    },
                    'sass-loader'
                ]

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
        new StyleLintPlugin({
            fix: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}