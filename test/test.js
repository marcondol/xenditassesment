const supertest = require("supertest");
const should = require("should");
const app = require('../app')


// UNIT test begin
describe("Xendit Pre Assesment unit test",function(){

  // #1 should return members list
  it("should return members list",function(done){
    // calling members list api
    supertest(app)
    .get("/orgs/xendit/members")
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it("should return comments list",function(done){
    // calling comments list api
    supertest(app)
    .get("/orgs/xendit/comment")
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('respond with 201 when created comment', function (done) {
    supertest(app)
      .post('/orgs/xendit/comment')
      .send({comment: "Mocha test "})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
          if (err) return done(err);
          done();
      });
  });

  it('respond with 201 when delete comment', function (done) {
    supertest(app)
      .delete('/orgs/xendit/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
          if (err) return done(err);
          done();
      });
  });

});