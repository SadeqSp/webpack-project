
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}