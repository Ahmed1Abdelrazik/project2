// tesing order model( database actions )

import { Order, OrderStore } from "../../models/order";


const store = new OrderStore()

describe("Order Model", ()=>{
        //testing the orders handler (it should pass after we create any order)
        it('showing an order after creating it', async function () {
            const order : Order = {
                status: 'active',
                user_id: "1",
            }
            await store.create(order)
            const orders =  await store.show('1')
            // console.log(orders)
          expect(orders).toEqual(Object({ id: 1, status: 'active', user_id: '1' }));
        });
    
    it('should have show method',async()=>{
        const data = await store.show('1')
        expect(data).toEqual(Object({ id: 1, status: 'active', user_id: '1' }));
    });


});