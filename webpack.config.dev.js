const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mainModule } = require('process');
const { dirname } = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'development',
//    watch: true,
    resolve: {
        extensions: ['.js'],
        alias:{
            '@assets' : path.resolve(__dirname, 'src/assets/'),
            '@docs' : path.resolve(__dirname, 'src/assets/docs/'),
            '@scripts' : path.resolve(__dirname, 'scripts/'),
            '@style' : path.resolve(__dirname, 'src/style/'),
            '@src' : path.resolve(__dirname, 'src/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.css$/i, 
                use: ["style-loader", "css-loader"], 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: "assets"
                },
            ],
        }),
        new Dotenv(),
    ],

}