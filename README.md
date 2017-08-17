# html-index-plugin [![Build Status](https://travis-ci.org/intervolga/html-index-plugin.svg?branch=master)](https://travis-ci.org/intervolga/html-index-plugin)

It will search for HTML assets during the Webpack build and emits index.html with links to that files.

## Installation:

Using npm:
```shell
$ npm install --save-dev @intervolga/html-index-plugin
```

## Configuration:

``` javascript
const HtmlIndexPlugin = require('@intervolga/html-index-plugin');
module.exports = {
	plugins: [
    new HtmlIndexPlugin()
	]
}
```
