"use strict";
//tesing products handler (endpoints)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywiZmlyc3RuYW1lIjoiWEQiLCJwYXNzd29yZCI6IiQyYiQxMyRIVUQ5cEg2TmZTMDB1ekF5TjJSVy8uUWhIa0NmMnZXSUExc3JERmg2ZDcvanJyM0RqTlEzZSIsImxhc3RuYW1lIjoiSEhIIn0sImlhdCI6MTY3MTgxNjE3Nn0.tYEb-Fna31nMDEOogeRUSks-IJc4kGF3fAWPQ7c93YQ";
// const request = supertest(app);
describe('Test products endpoint responses', function () {
    it('gets the products orders', function (done) {
        (0, supertest_1.default)(server_1.default)
            .get('/products')
            .expect(200)
            .end(function (error) { return (error ? done.fail(error) : done()); });
    });
});
