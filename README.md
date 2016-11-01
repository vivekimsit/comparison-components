# Comparison widget core
Comparison widget React class to be used in [JS pluggable widget](https://github.com/transferwise/comparison-widget/), Angular component etc.

## Development
Comparison widget is built in React, using Webpack and npm scripts.

### Tasks
To develop, run `npm install` or `yarn` and use the following tasks:
```
npm start        - runs a hot reloading server on port 8080 with demo app using the React component
npm run lint     - lints the files using ESLint (currently not required)
npm run build    - builds Webpack bundle and CSS using -p flag (with minification and uglification)
```

Do not forget to update the version number in `package.json` when committing changes.
