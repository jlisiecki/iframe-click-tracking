const path = require('path');
module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{ test: /\.ts$/, use: 'ts-loader' }]
    }
};
