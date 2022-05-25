const path = require('path');

module.exports = {
entry: './src/app.ts',
module: {
    rules:[{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
    }],
    // exports: {
    //     root: __dirname,
    //     modulesDrectories: ["/node_modules/Tone"],
    //     modules: ["/node_modules/Tone"]
    // }
},
resolve: {
    extensions: ['.ts', '.tsx', '.js']
},
output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
},
mode: 'development'
};