const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin()
    ],

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        }
    }
}
