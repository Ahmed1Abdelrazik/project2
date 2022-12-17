import supertest from "supertest";

import app from '../server';

const request = supertest(app);

describe('Test endpoints responses',()=>{


  it('gets the main endpoint', async (done)=>{
    const response =  await request.get('/');
    expect(response.status).toBe(200);
     done();
  })

  it('gets the users endpoint', async (done)=>{
    const response = await request.get('/users');
    expect(response.status).toBe(200);
    done();
  })
  it('gets the orders endpoint', async (done)=>{
    const response = await request.get('/orders/1');
    expect(response.status).toBe(200);
    done();
  })
  it('gets the products orders', async (done)=>{
    const response = await request.get('/products');
    expect(response.status).toBe(200);
    done();
  })


})