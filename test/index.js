const expect = require('expect.js');
const fs = require('fs');
const path = require('path');
const runWebpack = require('./helpers/run-webpack');

describe('html index plugin', () => {
  it('should produced expected html', () => {
    const entry = path.join(__dirname, 'cases', 'normal', 'source.js');
    const out = path.join(__dirname, 'cases', 'normal', 'index.html');

    return runWebpack(entry).then((result) => {
      const producedHtml = fs.readFileSync(out).toString();
      expect(producedHtml).to.contain('page1.html"');
      expect(producedHtml).to.contain('page 1 (produced');
    });
  });
});
