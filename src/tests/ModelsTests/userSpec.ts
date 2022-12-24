// tesing user model( database actions )

import { User, UserStore } from "../../models/user";


const store = new UserStore()

describe("User Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });
    //testing users handler
    it('creating a user', async function () {
        const product: User = {
            firstname: "ABC",
            lastname: "DEF",
            password: 'ABC25'
        }
        await store.create(product)
        const users = await store.index()

      expect(users.length).toBeGreaterThanOrEqual(1);
    });


});