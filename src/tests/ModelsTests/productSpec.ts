// tesing product model ( database actions )

import { Product, ProductStore } from "../../models/product";


const store = new ProductStore()

describe("Product Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });
    it('should have show method',()=>{
        expect(store.show).toBeDefined();
    });
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

});