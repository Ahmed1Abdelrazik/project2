"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../models/order");
var store = new order_1.OrderStore();
describe("Orders Model", function () {
    it('should have an show method', function () {
        expect(store.show).toBeDefined();
    });
});
