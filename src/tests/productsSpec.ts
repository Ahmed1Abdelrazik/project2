import { Product, ProductStore } from "../models/product";


const store = new ProductStore()

describe("Product Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });


});