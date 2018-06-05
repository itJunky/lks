const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        mode: 'development',//
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

     plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3000,//
        headers: {
       "Access-Control-Allow-Origin": "*",
       // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        contentBase: './public',
        hot: true
    },

};