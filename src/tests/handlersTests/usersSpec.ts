//tesing users handler (endpoint)

import request from "supertest";
import { User , UserStore} from "../../models/user";
const store = new UserStore()
import app from '../../server';
const Token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ" 


describe('Users Handler',()=>{

  it('gets the users endpoint', async ()=>{
    const res = await request(app)
    .get('/users')
    expect(res.text).toEqual('"check the token JsonWebTokenError: jwt must be provided"')
  })

  it('gets user by id',  async function(){
    const user : User = {
      firstname: 'nametest',
      lastname: "lastname",
      password: "pass",
    }
  await store.create(user)
    request(app)
    .get('/products/1')
    .expect(200)
 
  })


})