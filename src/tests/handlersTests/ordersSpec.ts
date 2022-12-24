//tesing orders handler (endpoints)


import request from "supertest";

import app from '../../server';

const Token = {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJhaG1lZCIsImxhc3RuYW1lIjoib2FtciIsInBhc3N3b3JkIjoiJDJiJDEzJGN5QWtBMzB6elVkQmE0QTB0bm5STHVFUjFpMUtwbk9wV2YzOEZ2QzlqSXRmTVAwMlVnbnkyIn0sImlhdCI6MTY3MTkxMzUxMX0.Av6tJ0t3Gf_TIwr2K6P2B7mHRbhBP0w2AmDKZd1Bx10" };

// const request = supertest(app);

describe('Orders Handler',()=>{

  it('gets the orders endpoint',  (done)=>{
    request(app)
    .get('/orders/1')
    .send(Token)

    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })
})