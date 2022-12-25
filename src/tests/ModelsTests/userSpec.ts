// tesing user model( database actions )

import { User, UserStore } from "../../models/user";

const store = new UserStore()

describe("User Model", ()=>{
    it('creating a user', async function () {
        const user: User = {
            firstname: "ABC",
            lastname: "DEF",
            password: 'ABC25'
        }
        await store.create(user)
        const users = await store.index()

      expect(users.length).toBeGreaterThanOrEqual(1);
    });
    it('should have an index method',async()=>{
        const index = await store.index();
        expect(index.length).toBeLessThan(7);
    });
    it('should have show method',async()=>{
        const data =  await store.show('1');
        // console.log(data)
        expect(data).toEqual(Object({ firstname: 'ahmed', lastname: 'oamr' }));
    });



});