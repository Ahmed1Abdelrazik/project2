import { Order, OrderStore } from "../models/order";


const store = new OrderStore()

describe("Orders Model", ()=>{
    it('should have an show method',()=>{
        expect(store.show).toBeDefined();
    });
    it('showing an order', async function () {
       
        const orders =  await store.show('1')
      expect(orders).toEqual(Object({ id: 1, status: 'active', user_id: '1' }));
    });


});