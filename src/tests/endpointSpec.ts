import request from "supertest";

import app from '../server';
const Token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ" 

// const request = supertest(app);

describe('Test endpoints responses',()=>{


  it('gets the main endpoint',  (done)=>{
   request(app)
   .get('/')
   .expect(200)
   .end((error)=> (error ? done.fail(error): done()));

  })

  it('gets the users endpoint', async ()=>{
    const res = await request(app)
    .get('/users')
    expect(res.text).toEqual('"check the token JsonWebTokenError: jwt must be provided"')
  })
  it('gets the orders endpoint',  (done)=>{
    request(app)
    .get('/orders/1')
    // .set('Authorization', `Bearer ${Token}`)
    .expect(401) //Unauthorized
    .end((error)=> (error ? done.fail(error): done()));
 
  })
  it('gets the products orders',  (done)=>{
    request(app)
    .get('/products')
    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })


})