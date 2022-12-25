//tesing orders handler (endpoints)
import { User , UserStore} from "../../models/user";
import app from '../../server';

var Token = {token: "" };
const user : User = {
  firstname: 'ahmed',
  lastname: "oamr",
  password: "123",
}

import request from "supertest";


describe('Orders Handler',()=>{
  beforeAll  (async()=>{
    //to save a token
    const res = await request(app)
    .post('/users')
    .send(user)
    Token.token = res.body
  })


  it('gets the orders endpoint',  (done)=>{
    request(app)
    .get('/orders/1')
    .send(Token)
    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })
})