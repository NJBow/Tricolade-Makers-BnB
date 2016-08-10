process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = require('chai').should;
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('API Routes', function() {
  it('should return all spaces', function(done) {
    chai.request(server)
    .get('/api/v1/spaces')
    .end(function(err, res) {
    expect(res).to.have.status(200);
    expect(res).to.be.json; // jshint ignore:line
    expect(res.body).to.be.a('array');
    expect(res.body.length).to.be.equal(4);
    expect(res.body[0]).to.have.property('name');
    expect(res.body[0].name).to.equal('Lovely cottage');
    expect(res.body[0]).to.have.property('description');
    expect(res.body[0].description).to.equal('An awesome little cottage');
    expect(res.body[0]).to.have.property('price_per_night');
    expect(res.body[0].price_per_night).to.equal(100);
    done();
    });
  });
});
