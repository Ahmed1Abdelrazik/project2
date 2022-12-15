"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var store = new user_1.UserStore();
describe("User Model", function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined();
    });
});
