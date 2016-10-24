var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './docs/index'
    ],
    output: {
        path: path.join(__dirname, 'docs/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]
}
