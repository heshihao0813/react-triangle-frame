var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './docs/index'
    ],
    output: {
        path: path.join(__dirname, 'docs/dist'),
        filename: 'bundle.js',
        publicPath: 'docs/dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, './docs')
        }]
    },
    resolve: {
        alias: {
            'react-triangle-frame': path.resolve(__dirname, './lib/index.js')
        },
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval'
}
