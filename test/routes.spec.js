process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = require('chai').should;
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = require('chai').expect;
var knex = require('../db/knex');

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

  // describe('Get all Spaces', function(){
  //   it('should return all spaces', function(done) {
  //       chai.request(server)
  //       .get('/spaces')
  //       .end(function(err, res) {
  //       expect(res).to.have.status(200);
  //       expect(res).to.be.json; // jshint ignore:line
  //       expect(res.body).to.be.a('array');
  //       expect(res.body.length).to.be.equal(4);
  //       expect(res.body[0]).to.have.property('name');
  //       expect(res.body[0].name).to.equal('Lovely cottage');
  //       expect(res.body[0]).to.have.property('description');
  //       expect(res.body[0].description).to.equal('An awesome little cottage');
  //       expect(res.body[0]).to.have.property('price_per_night');
  //       expect(res.body[0].price_per_night).to.equal(100);
  //       done();
  //     });
  //   });
  // });

  describe('GET /spaces/:id', function() {
    it('should return a single space', function(done) {
      chai.request(server)
      .get('/spaces/2')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json; // jshint ignore:line
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('name');
        expect(res.body.name).to.equal('Awesome penthouse');
        expect(res.body).to.have.property('description');
        expect(res.body.description).to.equal('A great penthouse');
        expect(res.body).to.have.property('price_per_night');
        expect(res.body.price_per_night).to.equal(200);
        done();
      });
    });
  });

  describe('POST /spaces', function() {
  it('should add a space', function(done) {
    chai.request(server)
    .post('/spaces')
    .send({
      name: 'Seaside bungalow',
      description: 'With sea views',
      price_per_night: 400
    })
    .end(function(err, res) {
      console.log(err);
      expect(res).to.have.status(200);
      expect(res).to.be.json; // jshint ignore:line
      expect(res.body).to.be.a('object');
      expect(res.body).to.have.property('name');
      expect(res.body.name).to.equal('Seaside bungalow');
      expect(res.body).to.have.property('description');
      expect(res.body.description).to.equal('With sea views');
      expect(res.body).to.have.property('price_per_night');
      expect(res.body.price_per_night).to.equal(400);
      done();
     });
   });
  });

  describe('PUT /spaces/:id', function() {
  it('should update a space', function(done) {
    chai.request(server)
    .put('/spaces/1')
    .send({
      description: 'A really nice cottage',
      price_per_night: 150
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json; // jshint ignore:line
      expect(res.body).to.be.a('object');
      expect(res.body).to.have.property('name');
      expect(res.body.name).to.equal('Lovely cottage');
      expect(res.body).to.have.property('description');
      expect(res.body.description).to.equal('A really nice cottage');
      expect(res.body).to.have.property('price_per_night');
      expect(res.body.price_per_night).to.equal(150);
      done();
      });
    });
  });

  // describe('DELETE /spaces/:id', function() {
  //   it('should delete a space', function(done) {
  //     chai.request(server)
  //     .delete('/spaces/1')
  //     .end(function(err, res) {
  //       expect(res).to.have.status(200);
  //       expect(res).to.be.json; // jshint ignore:line
  //       expect(res.body).to.be.a('object');
  //       expect(res.body).to.have.property('name');
  //       expect(res.body.name).to.equal('Lovely cottage');
  //       expect(res.body).to.have.property('description');
  //       expect(res.body.description).to.equal('An awesome little cottage');
  //       expect(res.body).to.have.property('price_per_night');
  //       expect(res.body.price_per_night).to.equal(100);
  //       chai.request(server)
  //       .get('/spaces')
  //       .end(function(err, res) {
  //         expect(res).to.have.status(200);
  //         expect(res).to.be.json; // jshint ignore:line
  //         expect(res.body).to.be.a('array');
  //         expect(res.body.length).to.equal(3);
  //         expect(res.body[0]).to.have.property('name');
  //         expect(res.body[0].name).to.equal('Awesome penthouse');
  //         expect(res.body[0]).to.have.property('description');
  //         expect(res.body[0].description).to.equal('A great penthouse');
  //         expect(res.body[0]).to.have.property('price_per_night');
  //         expect(res.body[0].price_per_night).to.equal(200);
  //         done();
  //       });
  //     });
  //   });
  // });

});
