const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './app/src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
        }),
        new VueLoaderPlugin(),
    ]
};
