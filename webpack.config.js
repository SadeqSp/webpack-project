const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');
const CreateManifestPlugin = require('./webpack-plugins/create-manifest-function');
const glob = require('glob');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app: [
            './src/index.js',
            './src/index.scss',
        ],
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name]-[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name]-[hash][ext]',
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
        new PurgecssWebpackPlugin({
            paths: glob.sync(path.join(__dirname, 'index.html')),
        }),
        new CreateManifestPlugin(),
    ]
}
