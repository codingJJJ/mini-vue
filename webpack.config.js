const { resolve } = require('path')
const WebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bound.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                use: resolve(__dirname, 'vue-loader') 
            }

        ]
    },
    devtool: 'source-map',
    plugins: [
        new WebpackPlugin()
    ]
}