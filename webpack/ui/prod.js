const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UgilyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../../../dist'),
        filename: 'build/build-[hash].js'
    },
    stats: {
        entrypoints: false,
        children: false,
        warnings: false
    },
    optimization: {
        minimizer: [
            new UgilyJsPlugin({
                parallel: true,
                warningsFilter: false,
                sourceMap: true,
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        unused: true,
                        dead_code: true
                    },
                    mangle: true,
                    keep_fnames: false
                }
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOPtions: {
                    safe: true,
                    discardComments: {
                        removeAll: true
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                                path: pathh.resolve(
                                    __dirname,
                                    '../../../postcss.config.js'
                                )
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'build/images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(eot|woff|woff2|tff)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'build/images/[name]-[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, '../../../public/favicon.png'),
            prefix: 'build/icons/[hash]-'
        }),
        new HTMLWebpackPlugin({
            filename: path.resolve(__dirname, '../../../dist/index.html'),
            template: path.resolve(__dirname, '../../../public/index.html'),
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'build/styles-[hash].css'
        })
    ]
}
