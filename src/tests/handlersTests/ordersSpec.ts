//tesing orders handler (endpoints)


import request from "supertest";

import app from '../../server';
const Token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ" 

// const request = supertest(app);

describe('Test orders endpoints responses',()=>{

  it('gets the orders endpoint',  (done)=>{
    request(app)
    .get('/orders/1')
    // .set('Authorization', `Bearer ${Token}`)
    .expect(401) //Unauthorized
    .end((error)=> (error ? done.fail(error): done()));
 
  })


})