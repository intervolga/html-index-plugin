/**
 * HTML index plugin
 *
 * @param {Object} options
 */
function HtmlIndexPlugin(options) {
  this.options = Object.assign({
    title: 'Index of /',
  }, options);
  this.template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>#TITLE#</title>
</head>
<body>
  #BODY#
</body>
</html>`;
}

HtmlIndexPlugin.prototype.apply = function(compiler) {
  const template = this.template;
  const title = this.options.title;

  compiler.hooks.emit.tapAsync('HtmlIndexPlugin',
    function(compilation, callback) {
      const body = Object.keys(compilation.assets).filter((asset)=> {
        return /\.html$/i.test(asset) && 'index.html' !== asset;
      }).map((asset) => {
        const content = compilation.assets[asset].source();
        const match = /<title>(.+?)<\/title>/g.exec(content);
        const title = match && match.length > 0 ?
          `${match[1]} (${asset})` : asset;

        return {
          name: asset,
          title: title,
        };
      }).map((asset) => {
        return `<li><a href="${asset['name']}">${asset['title']}</a></li>`;
      }).join('');

      const document = template
        .replace('#TITLE#', title)
        .replace('#BODY#', `<ul>${body}</ul>`);

      compilation.assets['index.html'] = {
        source: function() {
          return document;
        },
        size: function() {
          return document.length;
        },
      };

      callback();
    });
};

module.exports = HtmlIndexPlugin;
