// tesing models( database actions )
import { Product, ProductStore } from "../../models/product";


const store = new ProductStore()

describe("Product Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });
    //testing products handler
    it('adding a product', async function () {
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