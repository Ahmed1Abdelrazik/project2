"use strict";
//tesing orders handler (endpoints)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var Token = { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJhaG1lZCIsImxhc3RuYW1lIjoib2FtciIsInBhc3N3b3JkIjoiJDJiJDEzJGN5QWtBMzB6elVkQmE0QTB0bm5STHVFUjFpMUtwbk9wV2YzOEZ2QzlqSXRmTVAwMlVnbnkyIn0sImlhdCI6MTY3MTkxMzUxMX0.Av6tJ0t3Gf_TIwr2K6P2B7mHRbhBP0w2AmDKZd1Bx10" };
// const request = supertest(app);
describe('Orders Handler', function () {
    it('gets the orders endpoint', function (done) {
        (0, supertest_1.default)(server_1.default)
            .get('/orders/1')
            .send(Token)
            .expect(200)
            .end(function (error) { return (error ? done.fail(error) : done()); });
    });
});
