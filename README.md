# tonejs-experiments

Basic experiments with [Tone.js](https://github.com/Tonejs/Tone.js) in TypeScript

## Project setup

- Init npm and install necessary packages

    ```powershell
    npm init -y
    npm install --save-dev typescript tone webpack webpack-cli ts-loader live-server npm-run-all
    npm install --save-dev typescript@4.6.4 ts-loader@9.3.0 tone@14.7.77 webpack@5.72.1 webpack-cli@4.9.2 http-server@14.1.0 concurrently@7.2.1
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
    ```

- To build the application run:

    ```powershell
    npm run-script build
    ```

- To run multiple npm scripts cross platform in parallel run the following command:

    ```powershell
    # if globally installed
    concurrently npm:example1 npm:serve

    # if locally installed
    npx concurrently npm:example1 npm:serve
    ```
