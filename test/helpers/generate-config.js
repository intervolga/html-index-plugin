const path = require('path');
const Plugin = require(path.join(__dirname, '..', '..', 'index.js'));
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(entry) {
  return {
    mode: 'development',

    entry: entry,

    output: {
      path: path.dirname(entry),
      filename: 'produced.bundle.js',
      libraryTarget: 'commonjs2',
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App - page 1',
        filename: 'produced/page1.html',
      }),
      new HtmlWebpackPlugin({
        title: 'My App - page 2',
        filename: 'produced/page2.html',
      }),
      new HtmlWebpackPlugin({
        title: '',
        filename: 'produced/no-title.html',
      }),
      new Plugin({title: 'Overridden title'}),
    ],

    target: 'node',
  };
};
