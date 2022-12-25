//tesing users handler (endpoint)

import request from "supertest";
import { User , UserStore} from "../../models/user";
const store = new UserStore()
import app from '../../server';

const Token = {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJhaG1lZCIsImxhc3RuYW1lIjoib2FtciIsInBhc3N3b3JkIjoiJDJiJDEzJGN5QWtBMzB6elVkQmE0QTB0bm5STHVFUjFpMUtwbk9wV2YzOEZ2QzlqSXRmTVAwMlVnbnkyIn0sImlhdCI6MTY3MTkxMzUxMX0.Av6tJ0t3Gf_TIwr2K6P2B7mHRbhBP0w2AmDKZd1Bx10" };
const user : User = {
  firstname: 'ahmed',
  lastname: "oamr",
  password: "123",
}
describe('Users Handler',()=>{
  // testing POST users endpoint
  it('posts users endpoint', async ()=>{
    
    const res = await request(app)
    .post('/users')
    .send(user)
    expect(res.statusCode).toBe(200)

  })
  it('gets user by id && creating an user',  async function(){

  await store.create(user)
    request(app)
    .get('/users/1')
    .expect(200)
 
  })

  it('gets the users endpoint', async ()=>{
    
    const res = await request(app)
    .get('/users')
    .send(Token)
    expect(res.statusCode).toBe(200)

  })




})