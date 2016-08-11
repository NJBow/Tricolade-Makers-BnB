process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = require('chai').expect;
var knex = require('../db/knex');
var Browser = require('zombie');
var http = require('http');
var assert = require('assert');

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
     knex.migrate.rollback()
     .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  before(function(){
    this.server = http.createServer(server).listen(3000);
    this.browser = new Browser({ site: "http://localhost:3000"});
  });

  describe("Viewing spaces", function() {

    before(function(done) {
      this.browser.visit('/', done);
    });

    it('should include Express', function() {
      assert.ok(this.browser.success);
      assert.equal(this.browser.text('h1'), 'Express');
    });
  });

  describe('viewing spaces', function() {

    before(function(done) {
      this.browser.visit('/spaces', done);
    });

    it('should include an existing space', function() {
      assert.ok(this.browser.success);
      assert.equal(this.browser.text('h3'), 'Lovely cottage');
    });
  });


});
