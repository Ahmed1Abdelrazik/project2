//tesing products handler (endpoints)

import request from "supertest";
import { Product , ProductStore} from "../../models/product";
const store = new ProductStore()
import app from '../../server';
const Token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ" 

// const request = supertest(app);

describe('Products Handler',()=>{


  it('gets the products endpoint',  (done)=>{
    request(app)
    .get('/products')
    .expect(200)
    .end((error)=> (error ? done.fail(error): done()));
 
  })
  it('gets the product by id && creating a product',  async function(){
    const product : Product = {
      name: 'test',
      price: "10",
    }
  await store.create(product)
    request(app)
    .get('/products/1')
    .expect(200)
 
  })

})