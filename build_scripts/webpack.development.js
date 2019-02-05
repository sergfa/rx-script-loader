const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Reactive Scripts Loader',
            template: 'assets/index.html',
            filename: 'index.html',
            inject: 'head'
          })
    ]
})