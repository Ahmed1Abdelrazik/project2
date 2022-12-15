import { User, UserStore } from "../models/user";


const store = new UserStore()

describe("User Model", ()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    });

});