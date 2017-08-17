const expect = require('expect.js');
const fs = require('fs');
const path = require('path');
const runWebpack = require('./helpers/run-webpack');

describe('html index plugin', () => {
  it('should produced expected html', function(done) {
    this.timeout(30000); // eslint-disable-line no-invalid-this

    const entry = path.join(__dirname, 'cases', 'normal', 'source.js');
    const out = path.join(__dirname, 'cases', 'normal', 'index.html');

    runWebpack(entry).then(function() {
      const producedHtml = fs.readFileSync(out).toString();
      expect(producedHtml).to.contain('page1.html"');
      expect(producedHtml).to.contain('page 1 (produced');
      done();
    });
  });
});
