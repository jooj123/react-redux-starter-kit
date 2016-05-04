# react-redux-starter-kit
React Redux Starter Kit is a simple starter kit that can be deployed to run on Amazon S3 or other cloud file storage systems.
Its a very solid starting point for creating a powerful, flexible and maintainable react website.

The main principles around this starter kit are:
* Easy and cheap deployment to cloud file storage (eg. S3) - **WILL NEVER REQUIRE A NODE SERVER TO RUN!**
* Small bundle size, only contains what you need
* Tries to be as unopinionated as possible when it comes to the tech stack
* Only contains libraries that are actively maintained
* Great dev tools to speed up development time and help maintainability

Please star if you like this repo :)

## Features

- [Webpack](http://webpack.github.io/) with [css-loader](https://github.com/webpack/css-loader) Webpack is used for module bundling and css-loader is a css loader for webpack which is configued to use css modules, see: [css-modules](https://github.com/css-modules/css-modules) for more info.

- [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) for hot reloading of CSS and JS.

- [Redux](https://github.com/rackt/redux) is the next evolution of flux, unidirectional data flow, makes actions composable, reduces the boilerplate code and makes hot–reloading better.

- [Babel](http://babeljs.io/) is a modular JavaScript transpiler that allows you to write next generation JavaScript right now.

- [PostCSS](https://github.com/postcss/postcss) with [cssnext](http://cssnext.io/) PostCSS is a tool for transforming styles with JS plugins and cssnext allows you to write future CSS syntax right now.

- [react-router](https://github.com/rackt/react-router) is flexible routing system.

- [react-helmet](https://github.com/nfl/react-helmet) is used for managing the document title, meta, link, script, and base tags of each page in the app.

- [eslint](http://eslint.org/) is an awesome JS linter to help you discover problems with code without executing it. Uses the airbnb standard config.

- [stylelint](https://github.com/stylelint/stylelint) is the next generation CSS linter.

- [mocha](https://mochajs.org/) used as the unit testing framework, [chai](http://chaijs.com/) nice assertion library and [enzyme](https://github.com/airbnb/enzyme) for a jquery syntax to easily test react components. Mocha runs against [jsdom](https://github.com/tmpvar/jsdom) so tests are very fast and doesnt need a browser.


## Requirements

  * Mac OS X, Linux or Windows
  * [Node.js](https://nodejs.org/) v4.2 or newer
  * [npm](https://docs.npmjs.com/) v2.14 or newer
  * Text editor or IDE preferably pre-configured with React JSX highlight/ESlint and Stylelint

## Quick Start

Clone the repo and install:

```shell
$ git clone https://github.com/jooj123/react-redux-starter-kit.git myapp
$ cd myapp
$ npm install                   # install packages (might take a while)
```

## Run Dev Server

You can run a local webserver during development:

```shell
$ npm start
```

## Build

This will bundle and copy files to the *build* folder:

```shell
$ npm run build
```

By default, it builds in *debug* mode. If you need to build in release
mode, run the command below. This will optimize the output bundle for
production:

```shell
$ npm run build:prod
```

## Deploy to S3

To deploy to S3 you need to make sure you have the [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed.
After the AWS CLI is setup and you have created a build, you can use the default *s3_url* specified in the package.json or you can override this by using the below command:

```shell
$ npm config set react-redux-starter-kit:s3_url s3://[YOUR_SPECIFIC_BUCKET_NAME]
```

You can then use the following command to deploy the build to the S3 path:

```shell
$ npm run deploy:s3
```

## Test

To perform unit tests you can run the following:

```shell
$ npm run test:unit
```

If you would like to run unit tests and linting in one command you can run:

```shell
$ npm test
```

## Linting

`eslint` and `stylelint` are included in this starter kit to lint JavaScript and CSS styles.
To lint both run:

```shell
$ npm run lint
```

Or you can run them seperately:

```shell
$ npm run lint:js
```

```shell
$ npm run lint:style
```

## Todo

- add e2e tests
- add 1 more redux example to combine reducers
- add dev, qa, prod specific config
- remove the WATCH env?
- Upgrade to the latest React


