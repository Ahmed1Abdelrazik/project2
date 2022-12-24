//tesing users handler (endpoint)


import request from "supertest";

import app from '../../server';
const Token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ" 

// const request = supertest(app);

describe('Test Users endpoints responses',()=>{


  it('gets the users endpoint', async ()=>{
    const res = await request(app)
    .get('/users')
    expect(res.text).toEqual('"check the token JsonWebTokenError: jwt must be provided"')
  })


})