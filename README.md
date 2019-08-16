# tonejs-experiments

Basic experiments with [Tone.js](https://github.com/Tonejs/Tone.js) in TypeScript

## Project setup

- Init npm and install necessary packages

    ```powershell
    npm init -y
    npm install --save-dev typescript tone webpack webpack-cli ts-loader live-server npm-run-all
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
        "serve": "live-server --port=8085",
        "example1": "cd example-1 && webpack --watch"
    }
    ```

- To build the application run:

    ```powershell
    npm run-script build
    ```

- To run multiple npm scripts cross platform in parallel run the following command from the root directory (use the **npx** command if the packages were installed locally):

    ```powershell
    # if globally installed
    npm-run-all --parallel example1 serve

    # if locally installed
    npx npm-run-all --parallel example1 serve
    ```

- Or use the shorthand command **run-p** for parallel tasks:

    ```powershell
    # if globally installed
    run-p example1 serve

    # if locally installed
    npx run-p example1 serve
    ```
