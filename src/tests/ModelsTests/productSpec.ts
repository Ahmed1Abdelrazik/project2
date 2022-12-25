// tesing product model ( database actions )

import { Product, ProductStore } from "../../models/product";


const store = new ProductStore()

describe("Product Model", ()=>{
    it('creating a product', async function () {
        const product: Product = {
            name: "new product",
            price: '25'
        }
        await store.create(product)
        const products = await store.index()
        // console.log(product)

      expect(products.length).toBeGreaterThanOrEqual(1);
    });
    it('should have an index method',async()=>{
        const data = await store.index()
        // console.log(data)
        expect(data).toContain(Object({ id: 1|2|3, name: 'new product', price: 25 }));
    });
    it('should have show method',async()=>{
        const SHOW = await store.show('1')
        // console.log(Log)
        expect(SHOW).toEqual(Object({ id: 1, name: 'PORODUCT#1', price: 100 }));
    });


});