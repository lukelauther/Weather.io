const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: process.env.NODE_ENV,

    entry: './src/client/index.js', 

    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        proxy: {
            '/api/': 'http://localhost:3000',
            '/build': 'http://localhost:3000'
        },
        compress: true,
        port: 8080,
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            filename: 'index.html'
        })
    ], 

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx']
    }
}