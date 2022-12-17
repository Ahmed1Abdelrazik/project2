import { User, UserStore } from "../models/user";


const store = new UserStore()

describe("User Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });

    it('creating a user', async function () {
        const product: User = {
            firstname: "mahmoud",
            lastname: "mostafa",
            password: 'mostafa25'
        }
        await store.create(product)
        const users = await store.index()

      expect(users.length).toBeGreaterThanOrEqual(1);
    });


});