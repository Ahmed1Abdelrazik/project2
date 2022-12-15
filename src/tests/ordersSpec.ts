import { Order, OrderStore } from "../models/order";


const store = new OrderStore()

describe("Orders Model", ()=>{
    it('should have an show method',()=>{
        expect(store.show).toBeDefined();
    });


});