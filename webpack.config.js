var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    // release시에는 보안으로 인해 source-map으로 해야 함
    devtool: 'eval-source-map',
    entry: [
        __dirname + '/app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            // style-loader(html에 style추가), css-loader(javascript내 import이용하여 css로드하여 class 사용), modules(css modules화 하여 다른 css에 영향 없도록)
            loader: 'style-loader!css-loader?modules'
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // 기본 index.html template 지정, template loader(jade, ejs등)를 이용하여 html에 template적용 가능
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        })
    ],
    devServer: {
        contentBase: __dirname + '/app',
        port: 80,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};

module.exports = config;