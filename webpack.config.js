var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
            {
                presets: ['react']
            }
        }]
    }
};