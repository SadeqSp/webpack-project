
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: require('path').resolve(__dirname + '/dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
    }
}
