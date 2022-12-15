"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var store = new product_1.ProductStore();
describe("Product Model", function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined();
    });
});
