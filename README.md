# tonejs-experiments

Basic experiments with [Tone.js](https://github.com/Tonejs/Tone.js) in TypeScript

## Project setup

- Init npm and install necessary packages

    ```powershell
    npm init -y
    npm install --save-dev typescript tone webpack webpack-cli ts-loader live-server npm-run-all
    npm install --save-dev typescript@4.9.4 ts-loader@9.4.2 tone@15.0.4 webpack@5.75.0 webpack-cli@5.0.1 http-server@14.1.1 concurrently@7.6.0
    ```

- Create **Webpack** configuration `webpack.config.js`:

    ```javascript
    const path = require('path');

    module.exports = {
    entry: './src/app.ts',
    module: {
        rules:[{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
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
    ```

- Webpack will get the sources from `src/app.ts` and collect everything in `dist/app.js` file
- Create **TypeScript** configuration `tsconfig.json`:

    ```json
    {
        "compilerOptions": {
            "target": "es5"
        },
        "include": [
            "src/*"
        ]
    }
    ```

- Update the **scripts**-section of the `package.json` file (with additional scripts for the subprojects):

    ```json
    "scripts": {
        "serve": "http-server --port=8085 -o -c-1",
        "example1": "cd example-1 && webpack --watch"
    }

- To run multiple npm scripts cross platform in parallel run the following command:

    ```powershell
    # if globally installed
    concurrently npm:example1 npm:serve

    # if locally installed
    npx concurrently npm:example1 npm:serve
    ```
