// tesing order model( database actions )

import { Order, OrderStore } from "../../models/order";


const store = new OrderStore()

describe("Order Model", ()=>{
    it('should have an show method',()=>{
        expect(store.show).toBeDefined();
    });
    //testing the orders handler (it should pass after we create any order)
    it('showing an order', async function () {
        const order : Order = {
            status: 'active',
            user_id: "1",
        }
        await store.create(order)
        const orders =  await store.show('1')
        // console.log(orders)
      expect(orders).toEqual(Object({ id: 1, status: 'active', user_id: '1' }));
    });


});