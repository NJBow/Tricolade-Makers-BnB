process.env.NODE_END = 'test';
var environment = 'test';
//might need to require something for the database here too.
var Browser = require('zombie');
var app = require('../app');
var http = require('http');
var assert = require('assert');

describe("Index page", function() {
  before(function(){
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: "http://localhost:3000"});
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('shows existing spaces', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Express');
  });

});
