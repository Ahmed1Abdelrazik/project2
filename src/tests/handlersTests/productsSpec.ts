//tesing products handler (endpoints)
import request from "supertest";
import { User } from "../../models/user";
import { Product , ProductStore} from "../../models/product";
import app from '../../server';

const store = new ProductStore()

var Token = {token: "" };
const user : User = {
  firstname: 'ahmed',
  lastname: "oamr",
  password: "123",
}

// const request = supertest(app);
const product : Product = {
  name: 'PORODUCT#1',
  price: "100",
}
const product_token = {
  name: 'PORODUCT#1',
  price: "100",
  token: Token

}
describe('Products Handler',()=>{
  //testing POST products endpoint
  beforeAll  (async()=>{
    const res = await request(app)
    .post('/users')
    .send(user)
    Token.token = res.body
    product_token.token = res.body
  })

  it('posts products endpoint',  (done)=>{
    request(app)
    .post('/products')
    .send(product_token)
    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })

  it('gets the products endpoint',  (done)=>{
    request(app)
    .get('/products')
    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })
  it('gets the product by id && creating a product',  async function(){

  await store.create(product)
    request(app)
    .get('/products/1')
    .expect(200)
 
  })

})