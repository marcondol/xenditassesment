/* eslint-disable no-undef */
const supertest = require('supertest');
// eslint-disable-next-line no-unused-vars
const should = require('should');
const app = require('../app');

// UNIT test begin
describe('Xendit Pre Assesment unit test', () => {
  // #1 should return members list
  it('should return members list', (done) => {
    // calling members list api
    supertest(app)
      .get('/orgs/xendit/members')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  // should return org not found if orgNm not registered
  it('should return Error because not orgNm not registered', (done) => {
    // calling members list api
    supertest(app)
      .get('/orgs/rscm/members')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  it('should return comments list', (done) => {
    // calling comments list api
    supertest(app)
      .get('/orgs/xendit/comment')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  // should return org not found if orgNm not registered
  it('should return Error because not orgNm not registered while call /orgs/rscm/comment', (done) => {
    // calling members list api
    supertest(app)
      .get('/orgs/rscm/comment')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  it('respond with 201 when created comment', (done) => {
    supertest(app)
      .post('/orgs/xendit/comment')
      .send({ comment: 'Mocha test ' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('respond with 422 because format body incorect', (done) => {
    supertest(app)
      .post('/orgs/xendit/comment')
      .send({ commentx: 'Mocha test ' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('respond with 400 because orgnm not registered', (done) => {
    supertest(app)
      .post('/orgs/rscm/comment')
      .send({ comment: 'Mocha test ' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('respond with 201 when delete comment', (done) => {
    supertest(app)
      .delete('/orgs/xendit/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
