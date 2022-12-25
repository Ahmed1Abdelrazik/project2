//tesing users handler (endpoint)

import request from "supertest";
import { User , UserStore} from "../../models/user";
const store = new UserStore()
import app from '../../server';

var Token = {token: "" };
const user : User = {
  firstname: 'ahmed',
  lastname: "oamr",
  password: "123",
}
describe('Users Handler',()=>{
  // testing POST users endpoint
  beforeAll  (async()=>{
    await store.create(user)

  })
  it('posts users endpoint', async ()=>{
    
    const res = await request(app)
    .post('/users')
    .send(user)
    Token.token = res.body
    // console.log(Token)
    expect(res.statusCode).toBe(200)

  })
  it('gets user by id && creating an user',  async function(){


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